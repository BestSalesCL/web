import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsAndConditions() {
  return (
    <section className="flex-center-col size-full overflow-hidden">
      <div className="flex-center-col mb-[120px] mt-[32px] h-fit w-full max-w-[1240px] gap-[40px]">
        <h1 className="h1-small md:h1-big text-left text-text_color sm:text-center">
          Términos y Condiciones
        </h1>
        <div className="flex-start-col h-fit w-full max-w-[1240px] gap-[32px]">
          <p className="text-16 text-text_400">
            Bienvenido a BestSales, servicios ofrecidos por FZTH COMPANIES SPA. Al acceder o utilizar nuestros servicios de marketing digital, aceptas estos Términos y Condiciones ("Términos"), que regulan tu uso de nuestras plataformas y servicios. Estos Términos aplican a todos los visitantes, usuarios y otros que accedan o utilicen nuestros servicios de marketing digital.
          </p>

          <h2 className="subtitle text-text_color">Requisitos de Edad</h2>
          <p className="text-16 text-text_400">
            El sitio está destinado a usuarios mayores de 18 años. BestSales se reserva el derecho de modificar los criterios de elegibilidad y revocar el acceso si es ilegal.
          </p>

          <h2 className="subtitle text-text_color">Licencia y Uso del Servicio</h2>
          <p className="text-16 text-text_400">
            BestSales te concede una licencia limitada, no transferible y revocable para usar el Servicio con fines personales. No puedes reproducir, distribuir, vender o modificar el Servicio sin permiso.
          </p>

          <h2 className="subtitle text-text_color">Servicios Ofrecidos</h2>
          <p className="text-16 text-text_400">
            En BestSales, ofrecemos una gama completa de servicios de marketing digital que incluyen el manejo de campañas publicitarias, la creación y edición de anuncios, así como la producción de videos. También ofrecemos la venta de cursos especializados en marketing digital. Todos los servicios de grabación deben ser pagados antes del inicio del servicio. Nos reservamos el derecho de seleccionar los cortes finales de los metrajes de anuncios. En caso de discrepancias, nosotros tomaremos la decisión final. No nos responsabilizamos por los resultados de las campañas si no se aceptan nuestras decisiones finales y nos reservamos el derecho de finalizar la colaboración sin ofrecer devoluciones.
          </p>

          <h2 className="subtitle text-text_color">Suscripciones</h2>
          <p className="text-16 text-text_400">
            <strong>Registro:</strong> Debes proporcionar información precisa y mantenerla actualizada.
          </p>
          <p className="text-16 text-text_400">
            <strong>Suscripción:</strong> Renueva mensualmente. Debes cancelar en cualquier momento antes de la fecha de pago; si no lo haces, BestSales podrá terminar el contrato sin previo aviso según las políticas de terminación por no pago.
          </p>
          <p className="text-16 text-text_400">
            <strong>Métodos de Pago:</strong> Incluyen tarjeta de crédito, débito, Webpay, transferencia bancaria o efectivo.
          </p>
          <p className="text-16 text-text_400">
            <strong>Suspensión/Terminación:</strong> BestSales puede suspender o cancelar tu cuenta sin previo aviso en casos como retrasos en el pago mayores a 5 días hábiles o violaciones de los términos y condiciones.
          </p>

          <h2 className="subtitle text-text_color">Procesador de Pagos de Terceros</h2>
          <p className="text-16 text-text_400">
            Debes pagar todas las tarifas acordadas según los planes ofrecidos en el contrato mediante nuestro procesador de pagos.
          </p>

          <h2 className="subtitle text-text_color">Consultas de Facturación y Reembolsos</h2>
          <p className="text-16 text-text_400">
            Notifica cualquier error de facturación dentro de los 30 días. No se emitirán reembolsos después de este período.
          </p>

          <h2 className="subtitle text-text_color">Duración y Terminación</h2>
          <p className="text-16 text-text_400">
            El acuerdo comienza en la primera utilización del Servicio y continúa mientras se tengan proyectos en realización. BestSales puede suspender o eliminar tu cuenta en caso de violaciones sin previo aviso.
          </p>

          <h2 className="subtitle text-text_color">Contribuciones del Usuario</h2>
          <p className="text-16 text-text_400">
            Eres responsable del contenido que publiques, por lo que no puedes publicar contenido que infrinja derechos de terceros, sea explícito, abusivo o ilegal. BestSales tiene licencia para usar y distribuir tu contenido.
          </p>

          <h2 className="subtitle text-text_color">Conducta</h2>
          <p className="text-16 text-text_400">
            Debes comportarte de manera respetuosa y no involucrarte en actividades engañosas o ilegales con los integrantes del equipo de BestSales.
          </p>

          <h2 className="subtitle text-text_color">Interacciones con Terceros</h2>
          <p className="text-16 text-text_400">
            BestSales no es responsable de las transacciones entre usuarios y terceros.
          </p>

          <h2 className="subtitle text-text_color">Declaraciones y Garantías</h2>
          <p className="text-16 text-text_400">
            Aseguras que el contenido que publicas cumple con la ley y que no infringe derechos de terceros.
          </p>

          <h2 className="subtitle text-text_color">Garantía</h2>
          <p className="text-16 text-text_400">
            BestSales no garantiza que el Servicio será ininterrumpido, seguro o libre de errores.
          </p>

          <h2 className="subtitle text-text_color">Indemnización</h2>
          <p className="text-16 text-text_400">
            Aceptas indemnizar a BestSales por reclamaciones relacionadas con tu uso del Servicio.
          </p>

          <h2 className="subtitle text-text_color">Enlaces y Contenido de Terceros</h2>
          <p className="text-16 text-text_400">
            BestSales no es responsable del contenido en sitios de terceros enlazados desde el Servicio.
          </p>

          <h2 className="subtitle text-text_color">Renuncias</h2>
          <p className="text-16 text-text_400">
            El Servicio se proporciona "tal cual" y BestSales no garantiza su disponibilidad continua.
          </p>

          <h2 className="subtitle text-text_color">Limitación de Responsabilidad</h2>
          <p className="text-16 text-text_400">
            La responsabilidad total de BestSales no excederá el monto pagado en los 3 meses anteriores a la reclamación.
          </p>

          <h2 className="subtitle text-text_color">Propiedad Intelectual</h2>
          <p className="text-16 text-text_400">
            Todo el contenido de BestSales proporcionado en nuestro sitio web y a través de nuestros servicios, incluyendo texto, gráficos, logotipos y software están protegidos por las regulaciones internacionales de derechos de autor y propiedad intelectual. Todos los derechos no concedidos están reservados.
          </p>

          <h2 className="subtitle text-text_color">Exclusiones de Responsabilidad</h2>
          <p className="text-16 text-text_400">
            BestSales no se hará responsable por:
          </p>
          <ul className="list-disc ml-6">
            <li>Daños Indirectos: Pérdidas o daños que no se derivan directamente de tu uso de los servicios.</li>
            <li>Daños Incidentales: Daños que ocurren de forma inesperada o no intencional.</li>
            <li>Daños Especiales: Daños que son inusuales o no típicos que no se pueden prever fácilmente.</li>
            <li>Daños Consecuenciales: Pérdidas que resultan como una consecuencia indirecta de la imposibilidad de usar los servicios.</li>
            <li>Daños Punitivos: Daños destinados a castigar en lugar de compensar pérdidas.</li>
          </ul>
          <p className="text-16 text-text_400">
            Esto incluye, pero no se limita a:
          </p>
          <ul className="list-disc ml-6">
            <li>Pérdida de Beneficios: Cualquier pérdida de ingresos o ganancias esperadas.</li>
            <li>Pérdida de Datos: Pérdida de información o datos importantes.</li>
            <li>Pérdida de Uso: La incapacidad de usar o acceder a los servicios de la manera esperada.</li>
            <li>Pérdida de Oportunidades: La pérdida de oportunidades de negocio o ganancias.</li>
            <li>Interrupciones en el Servicio: Problemas técnicos que afectan la disponibilidad del servicio.</li>
          </ul>

          <h2 className="subtitle text-text_color">Modificaciones</h2>
          <p className="text-16 text-text_400">
            BestSales puede modificar estos Términos en cualquier momento sin previo aviso. Las modificaciones serán efectivas inmediatamente después de su publicación en el sitio. Es tu responsabilidad revisar estos Términos periódicamente para estar al tanto de cualquier cambio. El uso continuado del Servicio después de la publicación de modificaciones constituye tu aceptación de los Términos revisados.
          </p>

          <h2 className="subtitle text-text_color">Ley Aplicable</h2>
          <p className="text-16 text-text_400">
            Estos Términos se regirán e interpretarán de acuerdo con las leyes de Chile, sin tener en cuenta sus principios sobre conflicto de leyes. Cualquier disputa derivada de o relacionada con estos Términos se resolverá exclusivamente en los tribunales competentes en Santiago, Chile.
          </p>

          <h2 className="subtitle text-text_color">Contacto</h2>
          <p className="text-16 text-text_400">
            Si tienes alguna pregunta sobre estos Términos, puedes contactarnos a <a href="https://www.thebestsales.co/contact" className="text-blue-600">https://www.thebestsales.co/contact</a>, o enviarnos un correo electrónico a <a href="mailto:contact@thebestsales.co" className="text-blue-600">contact@thebestsales.co</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
