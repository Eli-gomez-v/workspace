MAIN
    # Variables globales
    SET MesActual TO "Enero"
    SET AñoActual TO "2025"
    SET AñoAnterior TO "2024"
    SET FechaHoy TO DateTime.Now
    SET RutaPlantilla TO "C:\RPA\Plantillas\010601_plantilla_word_cas.docx"
    SET RutaCSVMes TO "C:\RPA\Datos\010601_Mes.csv"
    SET RutaCSVMesAnterior TO "C:\RPA\Datos\010601_MesAñoAnterior.csv"
    SET RutaSalida TO "C:\RPA\Informes\Sociedades_Mercantiles_" + MesActual + "_" + AñoActual + ".docx"
    
    # Leer datos CSV del mes actual
    Variables.ReadCSVFile File: RutaCSVMes Encoding: Variables.CSVFileEncoding.UTF8 TrimFields: True FirstLineContainsColumnNames: True ColumnsSeparator: Variables.CSVColumnsSeparator.Comma CSVTable=> DatosMesActual
    
    # Leer datos CSV del año anterior
    Variables.ReadCSVFile File: RutaCSVMesAnterior Encoding: Variables.CSVFileEncoding.UTF8 TrimFields: True FirstLineContainsColumnNames: True ColumnsSeparator: Variables.CSVColumnsSeparator.Comma CSVTable=> DatosMesAnterior
    
    # Procesar datos y extraer valores
    CALL ProcessDataValues
    
    # Abrir plantilla Word
    Word.LaunchWord Visible: True WordInstance=> WordInstance
    Word.OpenDocument Instance: WordInstance Document: RutaPlantilla ReadOnly: False WordDocument=> DocumentoPlantilla
    
    # Reemplazar marcadores en el documento
    CALL ReplaceBookmarks
    
    # Guardar documento final
    Word.SaveDocument Instance: WordInstance Document: DocumentoPlantilla SaveAsFile: RutaSalida
    
    # Cerrar Word
    Word.CloseDocument Instance: WordInstance Document: DocumentoPlantilla SaveChanges: Word.CloseSaveChanges.No
    Word.CloseWord Instance: WordInstance
    
    DISPLAY MESSAGE "Informe generado exitosamente en: " + RutaSalida
END MAIN

SUBFLOW ProcessDataValues
    # Extraer valores de sociedades creadas
    LOOP FOREACH CurrentRow IN DatosMesActual
        IF CurrentRow['tipo_sociedad_cas'] = "Sociedades mercantiles creadas" THEN
            IF CurrentRow['variable_cas'] = "Número" AND CurrentRow['medida_cas'] = "Número" THEN
                SET CREA_NUM_NUM_AACT TO CurrentRow['valor_medida_cas']
            ELSE IF CurrentRow['variable_cas'] = "Número" AND CurrentRow['medida_cas'] = "Variación mensual" THEN
                SET CREA_NUM_VAR_MES TO CurrentRow['valor_medida_cas']
            ELSE IF CurrentRow['variable_cas'] = "Número" AND CurrentRow['medida_cas'] = "Variación anual" THEN
                SET CREA_NUM_VAR_ANUAL TO CurrentRow['valor_medida_cas']
            ELSE IF CurrentRow['variable_cas'] = "Número" AND CurrentRow['medida_cas'] = "Variación anual acumulada" THEN
                SET CREA_NUM_VAR_ACUM TO CurrentRow['valor_medida_cas']
            ELSE IF CurrentRow['variable_cas'] = "Capital suscrito (miles euros)" AND CurrentRow['medida_cas'] = "Capital suscrito (miles euros)" THEN
                SET CREA_CS_CS_AACT TO CurrentRow['valor_medida_cas']
            ELSE IF CurrentRow['variable_cas'] = "Capital suscrito (miles euros)" AND CurrentRow['medida_cas'] = "Variación mensual" THEN
                SET CREA_CS_VAR_MES TO CurrentRow['valor_medida_cas']
            ELSE IF CurrentRow['variable_cas'] = "Capital suscrito (miles euros)" AND CurrentRow['medida_cas'] = "Variación anual" THEN
                SET CREA_CS_VAR_ANUAL TO CurrentRow['valor_medida_cas']
            ELSE IF CurrentRow['variable_cas'] = "Capital suscrito (miles euros)" AND CurrentRow['medida_cas'] = "Variación anual acumulada" THEN
                SET CREA_CS_VAR_ACUM TO CurrentRow['valor_medida_cas']
            ELSE IF CurrentRow['variable_cas'] = "Capital medio suscrito (miles euros)" AND CurrentRow['medida_cas'] = "Capital medio suscrito (miles euros)" THEN
                SET CREA_CMS_CMS TO CurrentRow['valor_medida_cas']
            ELSE IF CurrentRow['variable_cas'] = "Capital medio suscrito (miles euros)" AND CurrentRow['medida_cas'] = "Variación mensual" THEN
                SET CREA_CMS_VAR_MES TO CurrentRow['valor_medida_cas']
            ELSE IF CurrentRow['variable_cas'] = "Capital medio suscrito (miles euros)" AND CurrentRow['medida_cas'] = "Variación anual" THEN
                SET CREA_CMS_VAR_ANUAL TO CurrentRow['valor_medida_cas']
            ELSE IF CurrentRow['variable_cas'] = "Capital medio suscrito (miles euros)" AND CurrentRow['medida_cas'] = "Variación anual acumulada" THEN
                SET CREA_CMS_VAR_ACUM TO CurrentRow['valor_medida_cas']
            END IF
        END IF
    END LOOP
    
    # Extraer valores de sociedades que amplían capital
    LOOP FOREACH CurrentRow IN DatosMesActual
        IF CurrentRow['tipo_sociedad_cas'] = "Sociedades mercantiles que amplían capital" THEN
            IF CurrentRow['variable_cas'] = "Número" AND CurrentRow['medida_cas'] = "Número" THEN
                SET AMPC_NUM_NUM_AACT TO CurrentRow['valor_medida_cas']
            ELSE IF CurrentRow['variable_cas'] = "Número" AND CurrentRow['medida_cas'] = "Variación mensual" THEN
                SET AMPC_NUM_VAR_MES TO CurrentRow['valor_medida_cas']
            ELSE IF CurrentRow['variable_cas'] = "Número" AND CurrentRow['medida_cas'] = "Variación anual" THEN
                SET AMPC_NUM_VAR_ANUAL TO CurrentRow['valor_medida_cas']
            ELSE IF CurrentRow['variable_cas'] = "Número" AND CurrentRow['medida_cas'] = "Variación anual acumulada" THEN
                SET AMPC_NUM_VAR_ACUM TO CurrentRow['valor_medida_cas']
            ELSE IF CurrentRow['variable_cas'] = "Capital suscrito (miles euros)" AND CurrentRow['medida_cas'] = "Capital suscrito (miles euros)" THEN
                SET AMPC_CS_CS_AACT TO CurrentRow['valor_medida_cas']
            ELSE IF CurrentRow['variable_cas'] = "Capital suscrito (miles euros)" AND CurrentRow['medida_cas'] = "Variación mensual" THEN
                SET AMPC_CS_VAR_MES TO CurrentRow['valor_medida_cas']
            ELSE IF CurrentRow['variable_cas'] = "Capital suscrito (miles euros)" AND CurrentRow['medida_cas'] = "Variación anual" THEN
                SET AMPC_CS_VAR_ANUAL TO CurrentRow['valor_medida_cas']
            ELSE IF CurrentRow['variable_cas'] = "Capital suscrito (miles euros)" AND CurrentRow['medida_cas'] = "Variación anual acumulada" THEN
                SET AMPC_CS_VAR_ACUM TO CurrentRow['valor_medida_cas']
            ELSE IF CurrentRow['variable_cas'] = "Capital medio suscrito (miles euros)" AND CurrentRow['medida_cas'] = "Capital medio suscrito (miles euros)" THEN
                SET AMPC_CMS_CMS TO CurrentRow['valor_medida_cas']
            ELSE IF CurrentRow['variable_cas'] = "Capital medio suscrito (miles euros)" AND CurrentRow['medida_cas'] = "Variación mensual" THEN
                SET AMPC_CMS_VAR_MES TO CurrentRow['valor_medida_cas']
            ELSE IF CurrentRow['variable_cas'] = "Capital medio suscrito (miles euros)" AND CurrentRow['medida_cas'] = "Variación anual" THEN
                SET AMPC_CMS_VAR_ANUAL TO CurrentRow['valor_medida_cas']
            ELSE IF CurrentRow['variable_cas'] = "Capital medio suscrito (miles euros)" AND CurrentRow['medida_cas'] = "Variación anual acumulada" THEN
                SET AMPC_CMS_VAR_ACUM TO CurrentRow['valor_medida_cas']
            END IF
        END IF
    END LOOP
    
    # Extraer valores de sociedades disueltas
    LOOP FOREACH CurrentRow IN DatosMesActual
        IF CurrentRow['tipo_sociedad_cas'] = "Sociedades mercantiles disueltas" THEN
            IF CurrentRow['variable_cas'] = "Número" AND CurrentRow['medida_cas'] = "Número" THEN
                SET DISU_NUM_NUM_AACT TO CurrentRow['valor_medida_cas']
            ELSE IF CurrentRow['variable_cas'] = "Número" AND CurrentRow['medida_cas'] = "Variación mensual" THEN
                SET DISU_NUM_VAR_MES TO CurrentRow['valor_medida_cas']
            ELSE IF CurrentRow['variable_cas'] = "Número" AND CurrentRow['medida_cas'] = "Variación anual" THEN
                SET DISU_NUM_VAR_ANUAL TO CurrentRow['valor_medida_cas']
            ELSE IF CurrentRow['variable_cas'] = "Número" AND CurrentRow['medida_cas'] = "Variación anual acumulada" THEN
                SET DISU_NUM_VAR_ACUM TO CurrentRow['valor_medida_cas']
            END IF
        END IF
    END LOOP
    
    # Extraer valores del año anterior
    LOOP FOREACH CurrentRow IN DatosMesAnterior
        IF CurrentRow['tipo_sociedad_cas'] = "Sociedades mercantiles creadas" THEN
            IF CurrentRow['variable_cas'] = "Capital suscrito (miles euros)" THEN
                SET CREA_CS_CS_ANT TO CurrentRow['valor_medida_cas']
            END IF
        ELSE IF CurrentRow['tipo_sociedad_cas'] = "Sociedades mercantiles que amplían capital" THEN
            IF CurrentRow['variable_cas'] = "Capital suscrito (miles euros)" THEN
                SET AMPC_CS_CS_AANT TO CurrentRow['valor_medida_cas']
            END IF
        END IF
    END LOOP
    
    # Calcular valores adicionales
    CALL CalculateAdditionalValues
END SUBFLOW

SUBFLOW CalculateAdditionalValues
    # Calcular diferencias para determinar texto "más" o "menos"
    IF CREA_NUM_VAR_ANUAL >= 0 THEN
        SET MAS_MENOS1 TO "más"
        SET AUM_DISM2 TO "aumento"
    ELSE
        SET MAS_MENOS1 TO "menos"
        SET AUM_DISM2 TO "disminución"
    END IF
    
    IF CREA_CS_VAR_ANUAL >= 0 THEN
        SET AUM_DISM1 TO "aumenta"
        SET AUM_DISM3 TO "aumenta"
    ELSE
        SET AUM_DISM1 TO "disminuye"
        SET AUM_DISM3 TO "disminuye"
    END IF
    
    IF CREA_CMS_VAR_ANUAL >= 0 THEN
        SET AUM_DISM4 TO "aumenta"
    ELSE
        SET AUM_DISM4 TO "disminuye"
    END IF
    
    IF AMPC_CMS_VAR_ANUAL >= 0 THEN
        SET AUM_DISM5 TO "aumenta"
    ELSE
        SET AUM_DISM5 TO "disminuye"
    END IF
    
    # Calcular diferencias absolutas
    SET VAR31 TO ABS(CREA_NUM_NUM_AACT - CREA_NUM_NUM_AANT)
    SET VAR32 TO ABS(DISU_NUM_NUM_AACT - DISU_NUM_NUM_AANT)
    SET VAR30 TO ABS(AMPC_NUM_NUM_AACT - AMPC_NUM_NUM_AANT)
    
    # Convertir números a texto
    SET VAR2 TO ConvertNumberToText(VAR31)
    SET VAR5 TO ConvertNumberToText(VAR32)
    SET VAR9 TO ConvertNumberToText(VAR30)
    
    # Determinar "más" o "menos" para otras comparaciones
    IF VAR31 >= 0 THEN
        SET MAS_MENOS3 TO "más"
    ELSE
        SET MAS_MENOS3 TO "menos"
    END IF
    
    IF VAR32 >= 0 THEN
        SET MAS_MENOS2 TO "más"
        SET MAS_MENOS5 TO "más"
    ELSE
        SET MAS_MENOS2 TO "menos"
        SET MAS_MENOS5 TO "menos"
    END IF
    
    IF VAR30 >= 0 THEN
        SET MAS_MENOS4 TO "más"
    ELSE
        SET MAS_MENOS4 TO "menos"
    END IF
END SUBFLOW

SUBFLOW ReplaceBookmarks
    # Reemplazar todos los marcadores en el documento
    Word.Replace Instance: WordInstance SearchText: "[MES ACTUAL]" ReplaceText: MesActual MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[AÑO ACTUAL]" ReplaceText: AñoActual MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[AÑO ANTERIOR]" ReplaceText: AñoAnterior MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[FECHA HOY]" ReplaceText: FechaHoy.ToString("dd 'de' MMMM 'de' yyyy") MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    
    # Reemplazar valores de sociedades creadas
    Word.Replace Instance: WordInstance SearchText: "[CREA_NUM_NUM_AACT]" ReplaceText: CREA_NUM_NUM_AACT.ToString() MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[CREA_NUM_VAR_ANUAL]" ReplaceText: CREA_NUM_VAR_ANUAL.ToString("0.0") MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[CREA_NUM_VAR_MES]" ReplaceText: CREA_NUM_VAR_MES.ToString("0.0") MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[CREA_NUM_VAR_ACUM]" ReplaceText: CREA_NUM_VAR_ACUM.ToString("0.0") MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[CREA_CS_CS_AACT]" ReplaceText: CREA_CS_CS_AACT.ToString("0.0") MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[CREA_CS_CS_ANT]" ReplaceText: CREA_CS_CS_ANT.ToString("0.0") MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[CREA_CS_VAR_ANUAL]" ReplaceText: CREA_CS_VAR_ANUAL.ToString("0.0") MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[CREA_CS_VAR_MES]" ReplaceText: CREA_CS_VAR_MES.ToString("0.0") MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[CREA_CS_VAR_ACUM]" ReplaceText: CREA_CS_VAR_ACUM.ToString("0.0") MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[CREA_CMS_CMS]" ReplaceText: CREA_CMS_CMS.ToString("0.0") MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[CREA_CMS_VAR_ANUAL]" ReplaceText: CREA_CMS_VAR_ANUAL.ToString("0.0") MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[CREA_CMS_VAR_MES]" ReplaceText: CREA_CMS_VAR_MES.ToString("0.0") MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[CREA_CMS_VAR_ACUM]" ReplaceText: CREA_CMS_VAR_ACUM.ToString("0.0") MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    
    # Reemplazar valores de sociedades que amplían capital
    Word.Replace Instance: WordInstance SearchText: "[AMPC_NUM_NUM_AACT]" ReplaceText: AMPC_NUM_NUM_AACT.ToString() MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[AMPC_NUM_VAR_ANUAL]" ReplaceText: AMPC_NUM_VAR_ANUAL.ToString("0.0") MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[AMPC_NUM_VAR_MES]" ReplaceText: AMPC_NUM_VAR_MES.ToString("0.0") MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[AMPC_NUM_VAR_ACUM]" ReplaceText: AMPC_NUM_VAR_ACUM.ToString("0.0") MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[AMPC_CS_CS_AACT]" ReplaceText: AMPC_CS_CS_AACT.ToString("0.0") MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[AMPC_CS_CS_AANT]" ReplaceText: AMPC_CS_CS_AANT.ToString("0.0") MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[AMPC_CS_VAR_ANUAL]" ReplaceText: AMPC_CS_VAR_ANUAL.ToString("0.0") MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[AMPC_CS_VAR_MES]" ReplaceText: AMPC_CS_VAR_MES.ToString("0.0") MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[AMPC_CS_VAR_ACUM]" ReplaceText: AMPC_CS_VAR_ACUM.ToString("0.0") MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[AMPC_CMS_CMS]" ReplaceText: AMPC_CMS_CMS.ToString("0.0") MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[AMPC_CMS_VAR_ANUAL]" ReplaceText: AMPC_CMS_VAR_ANUAL.ToString("0.0") MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[AMPC_CMS_VAR_MES]" ReplaceText: AMPC_CMS_VAR_MES.ToString("0.0") MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[AMPC_CMS_VAR_ACUM]" ReplaceText: AMPC_CMS_VAR_ACUM.ToString("0.0") MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    
    # Reemplazar valores de sociedades disueltas
    Word.Replace Instance: WordInstance SearchText: "[DISU_NUM_NUM_AACT]" ReplaceText: DISU_NUM_NUM_AACT.ToString() MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[DISU_NUM_VAR_ANUAL]" ReplaceText: DISU_NUM_VAR_ANUAL.ToString("0.0") MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[DISU_NUM_VAR_MES]" ReplaceText: DISU_NUM_VAR_MES.ToString("0.0") MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[DISU_NUM_VAR_ACUM]" ReplaceText: DISU_NUM_VAR_ACUM.ToString("0.0") MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    
    # Reemplazar textos condicionales
    Word.Replace Instance: WordInstance SearchText: "[MAS_MENOS1]" ReplaceText: MAS_MENOS1 MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[MAS_MENOS2]" ReplaceText: MAS_MENOS2 MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[MAS_MENOS3]" ReplaceText: MAS_MENOS3 MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[MAS_MENOS4]" ReplaceText: MAS_MENOS4 MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[MAS_MENOS5]" ReplaceText: MAS_MENOS5 MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[AUM_DISM1]" ReplaceText: AUM_DISM1 MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[AUM_DISM2]" ReplaceText: AUM_DISM2 MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[AUM_DISM3]" ReplaceText: AUM_DISM3 MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[AUM_DISM4]" ReplaceText: AUM_DISM4 MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[AUM_DISM5]" ReplaceText: AUM_DISM5 MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    
    # Reemplazar valores calculados
    Word.Replace Instance: WordInstance SearchText: "[VAR31-VAR2]" ReplaceText: VAR2 MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[EN LETRA VAR32-VAR-5]" ReplaceText: VAR5 MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
    Word.Replace Instance: WordInstance SearchText: "[EN LETRA VAR30-VAR9]" ReplaceText: VAR9 MatchCase: False MatchWholeWord: False MatchWildcards: False ReplaceAll: True
END SUBFLOW

FUNCTION ConvertNumberToText RETURNS Text
    INPUT Number AS Integer
    
    # Conversión básica de números a texto en español
    IF Number = 0 THEN
        RETURN "cero"
    ELSE IF Number = 1 THEN
        RETURN "una"
    ELSE IF Number = 2 THEN
        RETURN "dos"
    ELSE IF Number = 3 THEN
        RETURN "tres"
    ELSE IF Number = 4 THEN
        RETURN "cuatro"
    ELSE IF Number = 5 THEN
        RETURN "cinco"
    ELSE IF Number = 6 THEN
        RETURN "seis"
    ELSE IF Number = 7 THEN
        RETURN "siete"
    ELSE IF Number = 8 THEN
        RETURN "ocho"
    ELSE IF Number = 9 THEN
        RETURN "nueve"
    ELSE IF Number = 10 THEN
        RETURN "diez"
    ELSE
        RETURN Number.ToString()
    END IF
END FUNCTION