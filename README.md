# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/ee1203e4-4fb5-4bd0-afc9-5ba71e3a0a1a

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/ee1203e4-4fb5-4bd0-afc9-5ba71e3a0a1a) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Configuración de EmailJS para el formulario de contacto

Para que el formulario de `ContactSection` envíe correos a `contacto@dalu.com.ar`, sigue estos pasos:

1) Crear cuenta en EmailJS y un servicio
- Crea una cuenta en `https://www.emailjs.com/`
- En el panel, crea un Email Service conectado a tu proveedor (por ejemplo, Gmail/SMTP)

2) Crear plantilla (template)
- Crea un template con variables: `from_name`, `from_email`, `company`, `message`, `to_email`
- En el contenido del email, usa esas variables para construir el cuerpo
  (por ejemplo: Nombre: {{from_name}} | Email: {{from_email}} | Empresa: {{company}} | Mensaje: {{message}})
- Configura el destinatario con `{{to_email}}` o fija `contacto@dalu.com.ar` directamente en la plantilla

3) Variables de entorno
- Crea un archivo `.env` en la raíz del proyecto con:

```
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

4) Desarrollo
- Reinicia el servidor si ya estaba corriendo: `npm run dev`
- Completa el formulario y envía; deberías recibir el correo en `contacto@dalu.com.ar`

Notas
- No subas `.env` al repositorio
- Si usas otra plantilla, asegúrate de que los nombres de variables coincidan con los enviados desde el frontend

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/ee1203e4-4fb5-4bd0-afc9-5ba71e3a0a1a) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)