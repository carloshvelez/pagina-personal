---
publishDate: 2024-07-05T00:00:00Z
title: Encuesta Nacional de Consumo de SPA en Colombia - 2019. Análisis de las características demográficas.
excerpt: En esta segunda entrega analizaremos aspectos relevantes de las características sociodemográficas de los participantes en la encuesta. Para ello hemos creado un tablero con la librería Shiny de R. 
image: https://images.unsplash.com/photo-1556484687-30636164638b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
category: Encuesta Nacional de Consumo de SPA en Colombia - 2019
tags:
  - ENCSPA - 2019
  - Análisis de datos
  - R
  - ShinyApps
metadata:  
  canonical: https://carlos-velez.vercel.app/introduccion-a-la-encuesta-2
---



<script src="/pagedtable.js"></script>
<link href = "/pagedtable.css" rel="stylesheet" />




## ENCUESTA NACIONAL DE CONSUMO DE SPA EN COLOMBIA - ANÁLISIS DE LAS CARACTERÍSTICAS DEMOGRÁFICAS

En esta entrada presentaremos un tablero creado con el paquete Shiny de R. Posteriormente señalaremos los datos más relevantes. Recuerda que la utilidad de los tableros es que tú mismo puedes explorar la información que te interesa. 

Si accediste desde un dispositivo móvil, recuerda desplegar la barra de selección de variables mediante el siguiente ícono con forma de flecha hacia abajo (ˇ) o hacia la derecha (>)


ENTRADA EN CONSTRUCCIÓN...

<iframe src="https://br80nx-carlos-v0lez.shinyapps.io/demograficos/"  width="100%" height="800px"></iframe>

### Análisis de datos sociodemográficos 

ENTRADA EN CONSTRUCCIÓN

Esta entrada fue posible gracias a los datos publicados por el
Departamento Administrativo Nacional de Estadística (2020, 2024)

### Código de la aplicación. 
El código de la aplicación Shiny es el que se muestra a continuación. Supone el uso de varias de las funciones que creamos en la entrada 1 de esta serie. 

``` r
# Cargar funciones creadas en entrada anterior. 
source("utils/funciones_preparacion.R")

# Cargar paquetes (en la app_shiny no funciona cargar_paquetes())
library("RSQLite")
library("dplyr")
library("jsonlite")
library("ggplot2")
library("rlang")
library("bslib")
library("shiny")


# Definir variables a incluir:
datos_persona = list(
  tabla = "personas_seleccionadas", 
  variables= c("SEXO", "EDAD")
)

datos_vivienda = list(
  tabla = "encuestas",
  variables = c("Depmuni", "TIPO", "SERVICIO", "ESTRATO", "TOTAL_PERSONAS")
)

datos_ocupacion = list(
  tabla = "caracteristicas", 
  variables= c("D_01", "D_02", "D_03", "D_04", "D_05","D_06", "D_07")
)

otros_datos_demograficos = list(
  tabla = "caracteristicas_adicionales", 
  variables = c("D2_01", "D2_03", "D2_04", "D2_05", "D2_06", "D2_07")
)


#Construir el dataframe con las variables definidas
q <- construir_consulta(datos_persona, datos_vivienda, datos_ocupacion, otros_datos_demograficos)
conexion<-establecer_conexion()
df_demograficos <- dbGetQuery(conexion, q)
dbDisconnect(conexion)
df_demograficos <- preparar_df(df_demograficos)


#______________________________________________________

#SHINY APP
# Definir UI 
ui <- page_sidebar(
  #Título
  title="Análisis de la Encuesta Nacional de Consumo de SPA en Colombia. ENCSPA - 2019",
  
  #Barra de navegación lateral
  sidebar=sidebar(
    helpText(
      "Genera los gráficos para las variables sociodemográficas de la encuesta"
      ),
    
    selectInput(
      "variable_seleccionada", 
      label="Seleccione una variable para mostrar:",
      choices = colnames(df_demograficos[,-3]),
      selected = ""
      ),
    
    sliderInput("edad",
              label = "Seleccione un rango de edad para filtrar los datos:",
              min = min(df_demograficos[,2]), 
              max = max(df_demograficos[,2]), 
              value = c(12, 65)
              ),
    
    radioButtons("faceter", 
               label="Dividir los gráficos según sexo:",
               choices=c("Sí", "No"),
               selected = "No"),
    ),
  
  
  #Output en Main:,
  card(plotOutput("grafico")), card(uiOutput("tarjeta")))



# Definir lógica servidor ----
server <- function(input, output) {
  
  #Definir tema
  bs_theme(preset="united")
  
  
  #Definir output para grafico
  output$grafico <- renderPlot({
    
    variable_seleccionada <- rlang::sym(input$variable_seleccionada)
    
    #Gráfico si la variable seleccionada es factor
    if (class(df_demograficos[[variable_seleccionada]])=="factor"){
      df <- df_demograficos %>%
        filter(!is.na(!!variable_seleccionada))%>%
        filter(`¿Cuántos años cumplidos tiene la persona?` >= input$edad[1] & 
                 `¿Cuántos años cumplidos tiene la persona?` <= input$edad[2])%>%
        group_by(!!variable_seleccionada)%>%
        summarise(conteo = n())%>%
        mutate(porcentaje = conteo / sum(conteo) * 100)
      
      p <- ggplot(df, aes(y = reorder(!!variable_seleccionada, porcentaje), 
                          x=porcentaje, 
                          fill=!!variable_seleccionada))+
        geom_bar(stat="identity", fill="#6BAED6")+
        geom_text(aes(label=paste0(round(porcentaje, 1), "%")), 
                  hjust = -0.1) +
        labs(x="Porcentaje", 
             y="", 
             title=input$variable_seleccionada)+
        theme_minimal()+
        guides(fill="none")
      
      
      # Gráfico se la variable solicitada es factor y se solicita faceter
      if (input$faceter == "Sí" & input$variable_seleccionada!="Sexo"){
        df <- df_demograficos %>%
          filter(!is.na(!!variable_seleccionada))%>%
          filter(`¿Cuántos años cumplidos tiene la persona?` >= input$edad[1] & 
                   `¿Cuántos años cumplidos tiene la persona?` <= input$edad[2]) %>%
          group_by(!!variable_seleccionada, Sexo) %>%
          summarise(conteo = n(), .groups = 'drop') %>%
          mutate(porcentaje = conteo / sum(conteo) * 100)
        
        p <- ggplot(df, aes(x = porcentaje, 
                            y = reorder(!!variable_seleccionada, porcentaje), 
                            fill=`Sexo`)) +
          geom_bar(stat = "identity") +
          labs(x = "Porcentaje", 
               y = "", 
               title = as_label(variable_seleccionada)) +
          scale_fill_brewer(palette = "Blues") +  
          theme_minimal()+
          theme(legend.position = "bottom", legend.box="horizontal")
      }
    }
    
    
    #Gráfico si la variable es numérica. 
    else {
      df <- df_demograficos %>% 
        filter(!is.na(!!variable_seleccionada))%>%
        filter(`¿Cuántos años cumplidos tiene la persona?` >= input$edad[1] 
               & `¿Cuántos años cumplidos tiene la persona?` <= input$edad[2])
      
     
        
      p <- ggplot(df, aes(x=!!variable_seleccionada, 
                          group = `Sexo`, 
                          fill=`Sexo`)) + 
        geom_density(adjust=1.85, 
                     alpha=.4, 
                     color=NA) + 
        labs(y="Densidad", 
             x=input$variable_seleccionada, 
             title=input$variable_seleccionada)
        
      
      #Gráfico si se solicita faceter. 
      if (input$faceter == "Sí"){
        p <- p+facet_wrap(~`Sexo`, scales="free")
      }
    }
    
    #Renderizar gráfico. 
    p
    
  }
  )
  
  
  #Renderizar tarjeta. 
  output$tarjeta <- renderUI({
    
    #Aviso Rango
    info_rango <- paste(
      "Se muestra la información para las personas con edades entre",
      input$edad[1], 
      "y",
      input$edad[2],
      "años; inclusive.")
    
  
    #Datos de la variable
    variable_seleccionada <- rlang::sym(input$variable_seleccionada)
    datos_variable <- df_demograficos[[variable_seleccionada]]
    
    #Si la variable es numérica: resumen min, max, m, de
    if (class(datos_variable)!="factor"){
      valor_maximo = max(datos_variable)
      valor_minimo = min(datos_variable)
      media = round(mean(datos_variable, na.rm=TRUE), 2)
      de = round(sd(datos_variable, na.rm = TRUE), 2)
      
      
      #Construir info con datos
      etiqueta <- tagList(
        h4("Datos de resumen"),
        div(HTML(paste(
          info_rango, "</br>",
          "<b>Media:</b>", media, "</br>", 
          "<b>Desviación Estándar:</b>", de, "</br>",
          "<b>Minimo:</b>", valor_minimo, "</br>",
          "<b>Máximo:</b>", valor_maximo
          )))
        )
    }
    
    #Si la variable es factor, solo info rango:
    else{
      etiqueta <- div(h3("Nota:"), p(info_rango))
    }
    
    etiqueta
  })
    
 
}

# Ejecutar la app 
shinyApp(ui = ui, server = server)
```

### Referencias


Departamento Administrativo Nacional de Estadística, \[DANE\]. (2020). *Encuesta Nacional de Consumo de Sustancias Psicoactivas en Colombia - 2019. Microdatos*. <https://microdatos.dane.gov.co/index.php/catalog/680/>.



Departamento Administrativo Nacional de Estadística, \[DANE\]. (2024). *Codificación de la División Político Administrativa de Colombia - DIVIPOLA*. https://geoportal.dane.gov.co/descargas/divipola/DIVIPOLA_Municipios.xlsx.

</div>










