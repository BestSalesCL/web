import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: {
    index: false,
    follow: true,
  },
};

export default function Privacy() {
  return (
    <section className="flex-center-col size-full overflow-hidden">
      <div className="flex-center-col mb-[120px] mt-[32px] h-fit w-full max-w-[1240px] gap-[40px]">
        <h1 className="h1-small md:h1-big text-left text-text_color sm:text-center">
          Política de Privacidad.
        </h1>
        <div className="flex-start-col h-fit w-full max-w-[1240px] gap-[32px]">
          <p className="text-16 text-text_400">
            Esta Política de Privacidad describe las políticas de BestSales (Santiago, Chile), correo electrónico: contact@thebestsales.co, teléfono: +569 5328 4056, sobre la recopilación, uso y divulgación de su información que recopilamos cuando utiliza nuestro sitio web (https://www.thebestsales.co/). Al acceder o utilizar el servicio, usted consiente la recopilación, uso y divulgación de su información de acuerdo con esta Política de Privacidad. Si no consiente lo mismo, por favor no acceda ni utilice el servicio. Nosotros utilizamos la información recopilada para mejorar nuestros productos y servicios para brindar una mejor atención acorde a sus necesidades.
          </p>
          <p className="text-16 text-text_400">
            Podemos modificar esta Política de Privacidad en cualquier momento sin previo aviso y publicaremos la Política de Privacidad revisada en el servicio. La Política revisada será efectiva 30 días después de que se publique en el servicio y su acceso o uso continuado del servicio después de dicho tiempo constituirá su aceptación de la Política de Privacidad revisada. Por lo tanto, le recomendamos que revise periódicamente esta página.
          </p>

          <h2 className="subtitle text-text_color">Información que Recopilamos</h2>
          <p className="text-16 text-text_400">
            Recopilaremos y procesaremos la siguiente información personal sobre usted:
            <ul className="list-disc ml-6">
              <li>Nombre</li>
              <li>Apellido</li>
              <li>Correo electrónico</li>
              <li>Teléfono móvil</li>
              <li>Datos de uso</li>
            </ul>
          </p>

          <h2 className="subtitle text-text_color">Datos de Uso</h2>
          <p className="text-16 text-text_400">
            Los Datos de Uso se recopilan automáticamente al utilizar el servicio.
          </p>
          <p className="text-16 text-text_400">
            Los Datos de Uso pueden incluir información como la dirección del Protocolo de Internet de su Dispositivo (por ejemplo, dirección IP), tipo de navegador, versión del navegador, las páginas de nuestro servicio que usted visita, la hora y fecha de su visita, el tiempo dedicado a esas páginas, identificadores únicos de dispositivos y otros datos de diagnóstico.
          </p>
          <p className="text-16 text-text_400">
            Cuando usted accede al servicio a través de un dispositivo móvil, podemos recopilar cierta información automáticamente, incluyendo pero no limitada a, el tipo de dispositivo móvil que usted usa, la identificación única de su dispositivo móvil, la dirección IP de Su dispositivo móvil, el sistema operativo móvil, el tipo de navegador de Internet móvil que usa, identificadores únicos de dispositivos y otros datos de diagnóstico.
          </p>
          <p className="text-16 text-text_400">
            También podemos recopilar información que su navegador envía cada vez que visita nuestro servicio o cuando accede a este a través de un dispositivo móvil.
          </p>

          <h2 className="subtitle text-text_color">Cómo Usamos Su Información</h2>
          <p className="text-16 text-text_400">
            Usaremos la información que recopilamos sobre usted para los siguientes propósitos:
            <ul className="list-disc ml-6">
              <li>Marketing/Promocional</li>
              <li>Información administrativa</li>
              <li>Publicidad dirigida</li>
              <li>Gestión de pedidos de clientes</li>
              <li>Proporcionar y mantener el servicio, incluyendo monitorear su uso</li>
              <li>Gestionar su cuenta y su registro como usuario del servicio</li>
              <li>Desarrollar, cumplir y realizar contratos de compra de productos o servicios adquiridos a través del servicio</li>
              <li>Contactar mediante correo electrónico, llamadas telefónicas, SMS o notificaciones de aplicaciones móviles para actualizaciones o comunicaciones informativas relacionadas con el servicio</li>
              <li>Proveer noticias, ofertas especiales e información sobre productos, servicios y eventos similares a los que ya ha adquirido, salvo que haya optado por no recibir dicha información</li>
              <li>Atender y gestionar sus solicitudes</li>
              <li>Evaluar o llevar a cabo fusiones, reestructuraciones, reorganizaciones, disoluciones u otras transferencias de activos de la Compañía</li>
              <li>Otros propósitos, como análisis de datos, identificación de tendencias de uso, evaluación de campañas promocionales y mejora del servicio y productos</li>
            </ul>
          </p>

          <h2 className="subtitle text-text_color">Cómo Compartimos Su Información</h2>
          <p className="text-16 text-text_400">
            No transferiremos su información personal a ningún tercero sin solicitar su consentimiento, excepto en circunstancias limitadas como se describe a continuación:
          </p>
          <p className="text-16 text-text_400">
            La Compañía puede compartir su información personal en las siguientes situaciones:
            <ul className="list-disc ml-6">
              <li>Con proveedores de servicios para monitorear y analizar el uso del servicio y para contactarlo</li>
              <li>En transferencias comerciales, como fusiones, ventas de activos de la Compañía, financiamiento o adquisición</li>
              <li>Con afiliados, exigiendo que respeten esta Política de Privacidad</li>
              <li>Con socios comerciales para ofrecerle productos, servicios o promociones</li>
              <li>Con otros usuarios en áreas públicas del servicio</li>
              <li>Con su consentimiento, para cualquier otro propósito</li>
            </ul>
          </p>

          <h2 className="subtitle text-text_color">Retención de Su Información</h2>
          <p className="text-16 text-text_400">
            La Compañía retendrá sus Datos Personales sólo durante el tiempo necesario para los propósitos establecidos en esta Política de Privacidad. Retendremos y usaremos sus Datos Personales en la medida necesaria para cumplir con nuestras obligaciones legales (por ejemplo, si se nos exige conservar sus datos para cumplir con las leyes aplicables), resolver disputas y hacer cumplir nuestros acuerdos y políticas legales.
          </p>
          <p className="text-16 text-text_400">
            La Compañía también retendrá los datos de uso para fines de análisis interno. Los Datos de Uso generalmente se retienen por un período de tiempo más corto, excepto cuando estos datos se utilizan para fortalecer la seguridad o mejorar la funcionalidad de nuestro servicio, o cuando estamos legalmente obligados a retener estos datos por períodos de tiempo más largos.
          </p>

          <h2 className="subtitle text-text_color">Transferencia de Sus Datos Personales</h2>
          <p className="text-16 text-text_400">
            Su información, incluidos los Datos Personales, se procesa en las oficinas operativas de la Compañía y en cualquier otro lugar donde se encuentren las partes involucradas en el procesamiento. Esto significa que esta información puede ser transferida a, y mantenida en, computadoras ubicadas fuera de su estado, provincia, país u otra jurisdicción gubernamental donde las leyes de protección de datos pueden diferir de las de su jurisdicción.
          </p>
          <p className="text-16 text-text_400">
            Su consentimiento a esta Política de Privacidad, seguido por el envío de dicha información, representa su acuerdo con esa transferencia.
          </p>
          <p className="text-16 text-text_400">
            La Compañía tomará todas las medidas razonablemente necesarias para garantizar que sus datos se traten de manera segura y de acuerdo con esta Política de Privacidad, y no se realizará ninguna transferencia de sus Datos Personales a una organización o país a menos que haya controles adecuados en su lugar, incluyendo la seguridad de sus datos y otra información personal.
          </p>

          <h2 className="subtitle text-text_color">Eliminar Sus Datos Personales</h2>
          <p className="text-16 text-text_400">
            Tiene derecho a eliminar o solicitar que le ayudemos a eliminar los Datos Personales que hemos recopilado sobre usted.
          </p>
          <p className="text-16 text-text_400">
            Sin embargo, tenga en cuenta que es posible que necesitemos retener cierta información cuando tengamos una obligación legal o una base legal para hacerlo.
          </p>

          <h2 className="subtitle text-text_color">Cookies</h2>
          <p className="text-16 text-text_400">
            Utilizamos cookies y tecnologías de seguimiento similares para rastrear la actividad en nuestro servicio y almacenar información. Las cookies que utilizamos pueden ser de sesión (se eliminan al cerrar el navegador) o persistentes (permanecen en su dispositivo hasta que caducan o las elimina). Estas cookies tienen diversos propósitos:
            <ul className="list-disc ml-6">
              <li>Cookies Necesarias / Esenciales: Permiten el funcionamiento del sitio web y la autenticación de usuarios</li>
              <li>Cookies de Aceptación de Avisos: Identifican si los usuarios han aceptado el uso de cookies</li>
              <li>Cookies de Funcionalidad: Recuerdan sus elecciones en el sitio web, como preferencias de idioma o datos de inicio de sesión, para una experiencia personalizada</li>
            </ul>
          </p>
          <p className="text-16 text-text_400">
            Para más información y gestionar sus preferencias de cookies, consulte nuestra Política de Cookies o la sección de Cookies de nuestra Política de Privacidad.
          </p>

          <h2 className="subtitle text-text_color">Seguridad</h2>
          <p className="text-16 text-text_400">
            La seguridad de sus Datos Personales es importante para nosotros, pero recuerde que ningún método de transmisión por Internet ni método de almacenamiento electrónico es 100% seguro. Aunque nos esforzamos por utilizar medios comercialmente aceptables para proteger sus Datos Personales, no podemos garantizar su seguridad absoluta.
          </p>

          <h2 className="subtitle text-text_color">Quejas y contacto</h2>
          <p className="text-16 text-text_400">
            Si tiene alguna consulta o inquietud sobre el procesamiento de su información que está disponible con nosotros, puede contactarnos a <a href="https://www.thebestsales.co/contact" className="text-blue-600">https://www.thebestsales.co/contact</a>, correo electrónico: <a href="mailto:contact@thebestsales.co" className="text-blue-600">contact@thebestsales.co</a>. Abordaremos sus inquietudes de acuerdo con la ley aplicable.
          </p>
        </div>
      </div>
    </section>
  );
}
