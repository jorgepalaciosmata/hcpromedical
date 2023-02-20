import { ScrollView, StyleSheet, Text, View } from 'react-native';

const Disclaimer = () => {

    return (
        <ScrollView>
            <View style={styles.container}>
                            
                <Text style={styles.header}>Identificación del responsable </Text>
                <Text> HC PROMEDICAL SA DE CV, el responsable para efectos de la Ley Federal de Protección de Datos personales en Posesión de los Particulares y sus disposiciones reglamentarias (la “Ley de Datos”), con domicilio en Sur 136 número 116, Colonia Las Américas, Alcaldía Álvaro Obregón, C.P. 01120, en la Ciudad de México; le informa que tratará los datos personales que recabe de Usted con las siguientes:</Text>
                
                <Text style={styles.header}>Finalidades</Text>
                <Text>
                    Brindarle la atención médica que requiera conforme al Contrato de la Prestación de Servicios Hospitalarios, compartir información, así como a las políticas, procedimientos, protocolos y demás normatividad institucional de HC PROMEDICAL SA DE CV . – Incorporar sus datos a nuestras bases de atención de pacientes. – Integrar su expediente clínico. – Compartir sus datos con su médico tratante y médicos interconsultantes que indique su médico tratante, quienes son profesionistas independientes del HC PROMEDICAL SA DE CV  y quienes han asumido frente a Usted, la responsabilidad de su diagnóstico, pronóstico y tratamiento. – Compartir información y documentación de la atención médica que se le proporcione, con terceros pagadores en general, para el pago de los servicios del HC PROMEDICAL SA DE CV . – Subir al sistema de Consulta de Resultados, los resultados de sus estudios de Laboratorio y/o de Radiología e Imagen Molecular, los cuales Usted podrá consultar con el nombre de usuario y contraseña que le será proporcionado para tal efecto y, también podrá recibirlos vía correo electrónico a la dirección de correo electrónico que haya proporcionado en el Contrato de Prestación de Servicios Hospitalarios o bien, que proporcione en cualquier otro subsecuente. – Para dar cumplimiento a requerimientos de autoridad competente.
                </Text>

                <Text style={styles.header}>Finalidades secundarias</Text>
                <Text>
                    – Ocupar sus datos para fines estadísticos, de mejora de procesos de atención, académicos y/o investigación, para lo cual se tendrá cuidado de que Usted no pueda ser identificado. – Proporcionar a sus familiares y amigos que lo soliciten, información sobre el número de habitación en el cual se encuentre hospitalizado. – Compartir con representantes o voluntarios de su comunidad religiosa, información sobre su nombre y el número de habitación en el cual se encuentre hospitalizado, a fin de que pueda recibir apoyo espiritual durante su estancia en este Centro Médico. – Compartir información y documentación de la atención médica que se le proporcione, para efectos del pago de honorarios de su médico tratante e interconsultantes, ya sea directamente con dichos facultativos o bien, con la persona moral encargada del manejo y cobro de dichos honorarios médicos.
                </Text>

                <Text style={styles.header}>Fines publicitarios </Text>
                <Text>
                    Sus datos personales de contacto (domicilio, teléfono y/o correo electrónico) pueden llegar a ser empleados para hacerle llegar información acerca de las promociones y de las características de los servicios que ofrece el HC PROMEDICAL SA DE CV , principalmente, incluyendo en su caso, información acerca de sus proyectos asistenciales. Si usted no desea recibir ningún tipo de información al respecto o que sus datos no sean utilizados para alguna de las finalidades secundarias, le solicitamos así lo informe a HC PROMEDICAL SA DE CV, enviando un correo a administracion@hcpromedical.com
                </Text>

                <Text style={styles.header}>Datos personales </Text>
                <Text>                    
                    Para alcanzar las finalidades antes expuestas, se tratarán los siguientes datos personales: nombre completo, domicilio, teléfono, correo electrónico, estado civil, edad, sexo, nacionalidad, fecha de nacimiento, nombre, domicilio y teléfono de algún familiar que designe como familiar responsable y con quien podamos comunicarnos en caso de urgencia; en su caso, su número de póliza y demás información relacionada con el seguro de gastos médicos que tenga contratado. En algunos servicios, también se tomarán fotografías o videos que se integrarán a su expediente clínico, con la finalidad de llevar un registro de su evolución o del tratamiento.
                </Text>
                
                <Text style={styles.header}>Datos financieros </Text>
                <Text>
                    Para el cumplimiento de las finalidades antes citadas, en caso de ser necesario, se recabarán los siguientes datos financieros: datos de cuenta bancaria y datos fiscales. En caso de que usted realice el pago de servicios mediante cheque, le informamos que éste podrá ser transferido a alguna persona física o moral con la que el HC PROMEDICAL SA DE CV tenga celebrado un contrato de prestación de servicios de respaldo y transacción de cheques.
                </Text>

                <Text style={styles.header}>Datos personales sensibles</Text>
                <Text>
                    A fin de poder brindar la atención médico-hospitalaria y conforme a la legislación en salud aplicable, le serán solicitados los datos personales sensibles que se requieran para tal efecto: religión, estado de salud actual, padecimientos pasados y presentes, antecedentes heredofamiliares, síntomas, antecedentes patológicos relevantes, antecedentes de salud, y en algunos casos, cuando se requiera para su adecuada atención médica, también podrán ser tratados datos personales sensibles como su preferencia sexual e información genética (este último dato, para estudios de diagnóstico clínico que usted o su médico tratante hayan solicitado).
                </Text>
                
                <Text style={styles.header}>Comité de privacidad </Text>
                <Text>
                    A través del Comité de privacidad podrá solicitar el ejercicio de sus Derechos, que consisten en el acceso a sus datos personales, a su rectificación, cancelación u oposición a su tratamiento para fines específicos, así como también para la revocación del consentimiento otorgado para el tratamiento de sus datos personales en la medida permitida por la Ley; siendo el Comité de privacidad el encargado de dar seguimiento a su solicitud y de darle una respuesta. Dicho Comité también llevará a cabo las solicitudes que usted realice para limitar el uso o divulgación de sus datos. Para tal efecto, nos permitimos proporcionarle el correo electrónico del Comité de privacidad de ADMINSITRACION@HCPROMEDICAL.COM
                </Text>

                <Text style={styles.header}>Procedimiento y revocación del consentimiento </Text>
                <Text>
                Para el ejercicio de sus Derechos y/o la revocación de su consentimiento para el tratamiento de sus datos personales por el HC PROMEDICAL SA DE CV , agradeceremos presente una solicitud (“Solicitud de Ejercicio de Derechos ARCO”) al Comité de privacidad, al correo electrónico administracion@hcpromedical.com, acompañando la siguiente información:
                1. Nombre y datos de contacto como domicilio completo (calle, número interior y/o exterior, colonia, código postal, ciudad y estado) y/o correo electrónico; 2. Identificación con la que acredite su personalidad (credencial para votar, pasaporte vigente, cédula profesional o documento migratorio). 3. En caso de no ser el titular quien presente la solicitud, el documento que acredite la existencia de la representación, es decir, instrumento público o carta poder firmada ante dos testigos, junto con identificación del titular, del representante y de los testigos(credencial para votar, pasaporte vigente, cédula profesional o documento migratorio). Notas: – Para el caso de menores de edad, los documentos para acreditar la representación legal de este, serán: acta de nacimiento y credencial con fotografía del menor (la otorgada por la institución académica a donde acuda), credencial del IMSS, Pasaporte vigente, o cualquier otra que cuente con fotografía del mismo; – Para el caso de interdictos, los documentos para acreditar la representación legal serán: acta de interdicto y credencial con fotografía de la persona que ostente esta situación jurídica, ya sea, credencial para votar, pasaporte vigente, cédula profesional o documento migratorio. 4. Una descripción clara y precisa de los datos personales respecto de los cuales busca ejercer alguno de los Derechos, cual es el derecho a ejercer y las razones por las cuales desea ejercitarlo; 5. Cualquier documento o información que acredite que sus datos personales se encuentran en propiedad del HC PROMEDICAL SA DE CV ; 6. En caso de solicitar una rectificación de datos, favor de indicar también las modificaciones a realizarse, aportando la documentación que sustente su petición.
                El Comité de privacidad tiene a su disposición los formatos que se recomiendan para el ejercicio de Derechos ARCO, por lo que el correspondiente a su petición se le proporcionará al momento en que Usted lo solicite al Comité, por cualquier medio. El Comité responderá su Solicitud mediante el correo electrónico administracion@hcpromedical.com o personalmente, en zaragoza 119, Polotitlan, estado de méxico, CP 54200 HC PROMEDICAL SA DE CV . Conforme a la Ley, se cuenta con un término de 20 (veinte) días hábiles contados a partir de su solicitud, para informarle si su solicitud es procedente y, en caso de serlo, se cuenta con 15 (quince) días hábiles para hacer efectivo el Derecho ARCO. Las respuestas podrán enviarse vía correo electrónico o entregarse de forma personal. El Comité de privacidad podrá solicitarle información o documentación adicional, así como el cotejo de los documentos que sustentan su solicitud, dentro de los cinco (5) días hábiles siguientes a que la haya recibido y, en caso de que no haya respuesta a dicha petición dentro de los 10 (diez) días hábiles siguientes a que se haya emitido, se tendrá por no presentada la solicitud. Para hacer efectivo el Derecho ARCO, el plazo podrá prorrogarse una sola vez por un periodo igual en caso de ser necesario, lo cual se hará de su conocimiento. El HC PROMEDICAL SA DE CV podrá negar el ejercicio de los Derechos ARCO, en los siguientes supuestos: – Cuando el solicitante no sea el titular de los datos personales, o no pueda acreditar la representación del titular; – Cuando sus datos personales no obren en la base de datos del HC PROMEDICAL SA DE CV ; – Cuando se lesionen los derechos de un tercero; – Cuando exista un impedimento legal o la resolución de una autoridad competente, que restrinja sus Derechos ARCO; – En caso de cancelación, cuando los datos personales sean objeto de tratamiento para la prevención o para el diagnóstico médico o la gestión de servicios de salud; y, – Cuando la rectificación, cancelación u oposición haya sido previamente realizada. La Negativa podrá ser parcial, en cuyo caso el HC PROMEDICAL SA DE CV efectuará el acceso, rectificación, cancelación u oposición en la parte procedente. El ejercicio de los “Derechos ARCO” será gratuito, pero en caso de que en un periodo menor a doce meses se presenten dos solicitudes o más, el Centro Médico podrá realizar cobros por la emisión de copias de documentos. En caso de que el Solicitante requiera de la certificación de documentos, deberá hacer previamente el pago correspondiente conforme a las indicaciones que al efecto se le den a conocer. El solicitante deberá cubrir los gastos justificados de envío o el costo de reproducción en copias u otros formatos.
                </Text>
                
                <Text style={styles.header}>Transferencia: </Text>
                <Text>
                    Le informamos que sus datos personales podrán ser transferidos dentro y fuera del país, en forma congruente con la finalidad del tratamiento de los datos y la naturaleza jurídica de la relación entre Usted y el HC PROMEDICAL SA DE CV , a compañías aseguradoras con quienes tenga contratada una póliza, a terceros pagadores para los fines de pago que correspondan; a los amigos y familiares que soliciten el número de habitación en el área de Recepción para que puedan visitarle y a los representantes y/o voluntarios de la comunidad religiosa a la que pertenezca, siempre y cuando, usted autorice y/o solicite la asistencia espiritual en el área de Atención al Público.
                </Text>

                <Text style={styles.header}>
                    Uso de tecnologías de rastreo en nuestra página web o en nuestras redes sociales:
                </Text>
                <Text>
                    Le informamos que el HC PROMEDICAL SA DE CV utiliza Cookies en su página de internet, así como en sus redes sociales, las cuales se asocian únicamente con un Usuario anónimo y su ordenador, por lo que no proporcionan referencias que permitan deducir el nombre del Usuario. Las “cookies” del HC PROMEDICAL SA DE CV no pueden leer datos de su disco duro ni leer los archivos cookie creados por otros proveedores. El uso de la tecnología de las “cookies”, permite que el HC PROMEDICAL SA DE CV reconozca a los Usuarios registrados después de que éstos se hayan registrado por primera vez, sin que se tengan que registrar en cada visita para acceder a las áreas y servicios reservados exclusivamente a ellos. El Usuario tiene la posibilidad de configurar su navegador para ser avisado en pantalla de la recepción de “cookies” y para impedir la instalación de las mismas en su disco duro. Por favor, consulte las instrucciones y manuales de su navegador para ampliar esta información. Para utilizar el Servicio, no resulta necesario que el Usuario permita la instalación de las “cookies” enviadas por el HC PROMEDICAL SA DE CV , sin perjuicio de que en tal caso será necesario que el Usuario se registre cada vez que acceda al Servicio.
                </Text>

                <Text style={styles.header}>Modificaciones al aviso de privacidad: </Text>
                <Text>
                    El HC PROMEDICAL SA DE CV se reserva el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad, lo cual dará a conocer de forma personal o bien, por medio de la publicación de un aviso en lugar visible y/o en la página de internet www.HCPROMEDICAL.COM El Comité de privacidad del HC PROMEDICAL SA DE CV le comunicará de forma inmediata cualquier vulneración de seguridad que ocurra en cualquier fase del tratamiento de sus datos personales que afecte de forma significativa sus derechos patrimoniales o morales, mediante correo electrónico o llamada telefónica, por la que se le solicitará una cita para explicarle lo sucedido a fin de que pueda tomar las medidas que considere necesarias para la defensa de sus derechos.
                </Text>
                <Text style={styles.header}>Consentimiento </Text>
                <Text>
                    En caso de que Usted desee revocar o negar su consentimiento para que sus datos personales sean usados para las finalidades secundarias, le solicitamos nos lo haga saber a través del correo electrónico ADMINISTRACION@HCPROMEDICAL.COM, dentro de un plazo de cinco días hábiles.
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '300px'
    },
    header: {
        fontWeight: 'bold',
        marginTop: '10px'
    }
  });

export default Disclaimer;