# Petrel IPM Web App

## Plotly figures to widgets

### Saving plotly figures as widgets for web-app

1. Plot figures in `PetrelIPM-main` repo using plotly as usual
2. I'll make a branch of the `PetrelIPM-main` repo called `web-app` and add this to the R script(s) in `PetrelIPM-main/R/IPM/` for plotting:

        `library(htmlwidgets)`

        `N1 <- myplotly(mydf, 'N1', observed = myobs)`

        `saveWidget(N1, file = "</IPM_web-app/N1_files>")`

3. The output files (below) will be added to the IPM_web-app repo in the apporpriate site folder
        N1_files\crosstalk-1.2.1
        N1_files\htmltools-fill-0.5.8.1
        N1_files\htmlwidgets-1.6.4
        N1_files\jquery-3.5.1
        N1_files\plotly-binding-4.10.4
        N1_files\plotly-htmlwidgets-css-2.11.1
        N1_files\plotly-main-2.11.1
        N1_files\typedarray-0.1
        N1.html


**NOTE:** I wont merge the 'web-app' branch I create in `PetrelIPM-main` to the main branch, but you can always access it on Github.

