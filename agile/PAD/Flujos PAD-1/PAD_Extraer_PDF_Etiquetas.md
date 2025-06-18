# Se añade un mensaje que muestra el contenido del texto extraído y guardado.
Display.ShowMessageDialog.ShowMessageWithTimeout Title: $'''Texto extraído del PDF''' Message: TextoExtraido_PDF Icon: Display.Icon.Information Buttons: Display.Buttons.OK DefaultButton: Display.DefaultButton.Button1 IsTopMost: False Timeout: 3
# Se vuelve a eliminar el contenido del Portapapeles.
Clipboard.Clear _
