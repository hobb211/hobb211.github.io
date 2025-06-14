const projects = [
    {
        title: "Actualización del sistema de gestión de formación docente",
        description: "Sistema de gestión utilizado po la Dirección de Innovación Docente y Desarrollo Curricular de la Universidad Católica del Norte, que permite gestionar la formación docente, niveles de competencia y certificación de los académicos de la universidad. El sistema fue desarrollado con React, Node.js, el framework Koa.js y una base de datos de PostgreSQL. El proyecto abarco la incorporación de nuevas funcionalidades, incorporación de reportes mejorados para la toma de decisiones, mejoras en la interfaz de usuario, optimización del rendimiento y corrección de errores.",
        images: [
            "assets/DIDDEC/DIDDEC Ofertas Formativas.png"
        ],
        technologies: ["React", "Node.js", "JavaScript", "Koa.js", "PostgreSQL", "Docker"],
    },
    {
        title: "Implementación de Freshchat en DropControl",
        description: "DropControl es un sistema de monitoreo y administración de campos agrícolas desarrollado por la empresa WiseConn. Este sistema permite a los agricultores gestionar los niveles de agua en sus campos y programar riegos automatizados, optimizando el uso de recursos hídricos. Este proyecto consistió en la implementación de Freshchat, una herramienta de chat en vivo, para mejorar la comunicación con los clientes y brindar soporte técnico en tiempo real.  Esta implementación abarco el sitio web moderno en Next.js, el sitio web antiguo en Struts2 y la aplicación movil en ReactNative junto con la recopilación de datos de los clientes que contactan al soporte para agilizar el proceso de atención.",
        images: [
            "assets/WiseConn/Freshchat New dropcontrol.png",
            "assets/WiseConn/Freshchat Cuenta New DropControl.png",
            "assets/WiseConn/Freshchat campo New DropControl.png",
            "assets/WiseConn/Freshchat sectores New DropControl.png",
            "assets/WiseConn/Freshchat DropControl.png",
            "assets/WiseConn/Freshchat cuenta DropControl.png",
            "assets/WiseConn/Freshchat campo DropControl.png",
            "assets/WiseConn/Freshchat sectores Dropcontrol.png",
            "assets/WiseConn/Freshchat menu App mobile.jpg",
            "assets/WiseConn/Freshchat chats App Mobile.jpg",
            "assets/WiseConn/Freshchat chat App Mobile.jpg"
        ],
        technologies: ["Next.js", "Struts2", "React Native", "JavaScript", "Freshchat", "AWS Lambda", "Docker"],
    },
    {
        title: "Proyecto de gestión de Inventario | AgroFamily",
        description: "Sistema de gestión de inventario desarrollado para la pyme AgroFamily, que permite gestionar los productos agrícolas y sus ventas. El sistema fue desarrollado como un proyecto universitario en colaboración con un socio de la comuna, para ello se utilizo WPF en .NET 6 con SQLite como base de datos.",
        images: [
            "assets/AgroFamily/0.png",
            "assets/AgroFamily/1.png",
            "assets/AgroFamily/2.png",
        ],
        technologies: ["WPF", ".NET 6", "SQLite", "C#"],
        repo: "https://github.com/hobb211/AgroFamily"
    },
    {
        title: "Proyecto de reportes mineros",
        description: "Sistema de reportes mineros desarrollado como un proyecto universitario, que permite generar informes sobre la producción minera a partir de los datos almacenados en una carpeta, estos datos pasan por un ETL que se ejecuta periódicamente y luego son cargados a la base de datos para su analisis en el sistema.",
        images: [
            "assets/Reportes Mineros/login.png",
            "assets/Reportes Mineros/menu.png",
            "assets/Reportes Mineros/reportes.png",
        ],
        technologies: ["Next.js", "Nest.js", "Node.js", "JavaScript", "PostgreSQL", "Python"],
    },
    /* {
        title: "Proyecto Go-Ecommerce",
        description: "Proyecto de e-commerce desarrollado como un proyecto universitario, que utiliza microservicios para crear una tienda online.",
        images: [
            "assets/Go-Ecommerce/1.png",
        ],
        technologies: ["Angular", "Nest.js", "Node.js", "JavaScript", "MySQL", "Docker", "RabbitMQ", "Golang"]
    } */
]

// Function to create a projects with carousels and modals from the projects array
const container = document.getElementById("projects-container");
projects.forEach(project => {
    const carouselId = `miniCarousel-${projects.indexOf(project)}`;
    const modalId = `modalCarousel-${projects.indexOf(project)}`;
    const modalCarouselId = `modalCarouselInner-${projects.indexOf(project)}`;

    const carouselItems = project.images.map((image, index) => `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${image}" class="d-block w-100" alt="Project Image ${index + 1}">
        </div>
    `).join('');

    const modalItems = project.images.map((image, index) => `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${image}" class="d-block w-100" alt="Project Image ${index + 1}">
        </div>
    `).join('');

    container.innerHTML += `
        <div class="row align-items-center mb-5">
            <div class="col-md-6">
                <div class="carousel slide shadow rounded-3" id="${carouselId}" data-bs-ride="carousel" style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#${modalId}">
                <div class="carousel-inner">${carouselItems}</div>
                </div>
            </div>
            <div class="col-md-6 mt-4 mt-md-0">
                <h3 class="fw-bold">${project.title}</h3>
                <p>${project.description}</p>
                <div class="mt-3">
                    ${project.technologies.map(tech => `
                        <span class="badge bg-secondary me-2">${tech}</span>
                    `).join('')}
                </div>
                ${project.repo ? `
                    <a href="${project.repo}" target="_blank" class="btn btn-outline-light mt-3">
                    <i class="bi bi-github"></i> Ver en GitHub
                    </a>
                `:''}
            </div>
        </div>

        <div class="modal fade" id="${modalId}" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-xl modal-dialog-centered">
                <div class="modal-content bg-dark border-0">
                    <div class="modal-body p-0">
                        <div class="carousel slide" id="${modalCarouselId}" data-bs-ride="carousel">
                            <div class="carousel-inner">${modalItems}</div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#${modalCarouselId}" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#${modalCarouselId}" data-bs-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
});