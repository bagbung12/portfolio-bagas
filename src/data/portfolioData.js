const baseUrl = import.meta.env.BASE_URL || '/';

export const portfolioData = {
  profile: {
    name: "Bagas Muhamad Febrian",
    shortName: "Bagas",
    role: "Web Developer",
    subRoles: ["Junior PHP Developer", "Web Developer", "MySQL Enthusiast"],
    statusText: "Terbuka untuk peluang kerja",
    location: "Baleendah, Bandung",
    email: "bagasmfebrian99@gmail.com",
    phone: "+62 821-1872-8419",
    bio: "Lulusan Manajemen Sistem Informasi dengan keahlian membangun website berbasis PHP & MySQL. Berpengalaman membuat sistem CRUD, dashboard admin, dan manajemen database. Terbiasa bekerja mandiri maupun dalam tim, cepat belajar, dan siap berkembang.",
    avatar: `${baseUrl}foto.jpg`,
    cvPath: `${baseUrl}CV_ATS_Bagas_Muhamad_Febrian.pdf`,
    liveDemoUrl: "https://mmccourse.my.id/",
    githubUrl: "https://github.com/bagbung12/portfolio-bagas",
  },
  skills: [
    {
      category: "Core Web Technologies",
      items: [
        { name: "PHP", level: "ADVANCED", badgeColor: "blue" },
        { name: "MySQL", level: "ADVANCED", badgeColor: "blue" },
        { name: "HTML & CSS", level: "ADVANCED", badgeColor: "blue" },
        { name: "JavaScript", level: "INTERMEDIATE", badgeColor: "sky" },
        { name: "Bootstrap 5", level: "INTERMEDIATE", badgeColor: "sky" },
        { name: "React JS", level: "INTERMEDIATE", badgeColor: "sky" },
      ]
    },
    {
      category: "Tools, Database & Mobile",
      items: [
        { name: "Database Design", level: "ADVANCED", badgeColor: "blue" },
        { name: "Admin Dashboard", level: "INTERMEDIATE", badgeColor: "sky" },
        { name: "Android Studio", level: "INTERMEDIATE", badgeColor: "sky" },
        { name: "Git & GitHub", level: "BASIC", badgeColor: "slate" },
      ]
    }
  ],
  experiences: [
    {
      company: "MMC Course",
      role: "Web Developer",
      type: "Internship · 3 Bulan",
      period: "2024 — 2025",
      link: "https://mmccourse.my.id/",
      highlights: [
        "Mengembangkan website media promosi berbasis PHP & MySQL",
        "Membangun fitur CRUD untuk data pendaftaran peserta",
        "Membuat dashboard admin yang fungsional dan terstruktur",
        "Mengelola database dan alur data pengguna secara efisien",
        "Menampilkan website live dan dapat diakses publik"
      ]
    }
  ],
  projects: [
    {
      id: "mmc-course",
      title: "MMC Course Management System",
      badge: "LIVE",
      description: "Sistem manajemen kursus berbasis web yang dikembangkan secara penuh — mencakup booking system, registrasi peserta, manajemen file, hingga dashboard admin. Dibangun dengan PHP & MySQL dan sudah berjalan live di domain resmi.",
      liveUrl: "https://mmccourse.my.id/",
      githubUrl: "https://github.com/bagbung12/portfolio-bagas",
      features: [
        { icon: "Calendar", title: "Course Booking System" },
        { icon: "UserCheck", title: "Student Registration System" },
        { icon: "Database", title: "CRUD Data Management" },
        { icon: "FileUpload", title: "File Upload Management" },
        { icon: "LayoutDashboard", title: "Admin Dashboard" },
        { icon: "Server", title: "Database Management" }
      ],
      screenshots: [
        { id: 1, name: "Homepage", title: "Homepage MMC Course", src: `${baseUrl}homepage.png`, wide: true },
        { id: 2, name: "Dashboard Admin", title: "Dashboard Admin", src: `${baseUrl}admin.png`, wide: false },
        { id: 3, name: "Booking System", title: "Booking System", src: `${baseUrl}booking.png`, wide: false },
        { id: 4, name: "CRUD Peserta", title: "CRUD Peserta", src: `${baseUrl}crud.png`, wide: false },
        { id: 5, name: "Upload File", title: "Upload File", src: `${baseUrl}upload.png`, wide: false }
      ],
      techStack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap"]
    }
  ],
  achievements: [
    {
      id: 1,
      icon: "Trophy",
      title: "Web Developer Intern — MMC Course",
      subtitle: "Internship · 3 Bulan · 2024–2025"
    },
    {
      id: 2,
      icon: "Code2",
      title: "Membangun Web-Based Course Management System",
      subtitle: "Sistem lengkap: Booking, CRUD, Upload, Dashboard, Database Management"
    },
    {
      id: 3,
      icon: "FileText",
      title: "Publikasi Ilmiah (2025)",
      subtitle: "Accepted — International Journal Computer Technology (IJCT)"
    }
  ],
  publication: {
    status: "Accepted · 2025",
    title: "The Impact of Digital Innovation on Improving Efficiency and Market Reach: A Case Study of MMC Private Tutoring in Adapting to the Web Era",
    journal: "International Journal Computer Technology (IJCT)"
  },
  education: [
    {
      period: "2021 — 2025",
      school: "Politeknik Piksi Ganesha Bandung",
      major: "Manajemen Sistem Informasi"
    },
    {
      period: "2018 — 2020",
      school: "SMKN 3 Baleendah",
      major: "Agribisnis Tanaman Pangan & Hortikultura"
    }
  ]
};
