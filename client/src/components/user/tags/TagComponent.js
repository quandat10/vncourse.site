import { Link } from "react-router-dom";

const itTags = [
  "Bootstrap",
  "WordPress",
  "Web Developer",
  "Data Science",
  "AI-ML-DL",
  "Mobile App",
  "Programing Language",
  "Game Developer",
  "Database",
  "Software Testing",
  "It Certification",
  "DevOps",
  "Network & Security",
  "Block Chain",
  "React",
  "VueJs",
  "Nodejs",
  "Java",
  "C++",
  "Flutter",
  "Javasript",
  "kotlin",
  "Python",
  "Mongodb",
  "Sql",
  "MySql",
  "ASP.net",
  "Swift",
  "Rust",
  "Angular",
  "Laravel",
  "Html/Css",
  "PHP",
  "Django",
];

const businessTags = [
  "Finance",
  "Entrepreneurship",
  "Communications",
  "Management",
  "Sales",
  "Strategy",
  "Operations",
  "Project Management",
  "Business Law",
  "Data & Analytics",
  "Home Business",
  "Human Resources",
  "Industry",
  "Media",
  "Real Estate",
  "Other Business",
];
const OfficeTag = [
  "Microsoft",
  "Google",
  "Apple",
  "SAP",
  "Oracle",
  "Other Productivity",
];
const graphTags = [
  "Web Design",
  "Graphic Design",
  "Design Tools",
  "User Experience",
  "Game Design",
  "Design Thinking",
  "3D & Animation",
  "Fashion",
  "Architectural Design",
  "interior Design",
  "Other",
];
const tagss = [
  {
    id: "Development",
    value: itTags,
  },
  {
    id: "Business",
    value: businessTags,
  },
  {
    id: "graphTags",
    value: graphTags,
  },
  {
    id: "Office Productivity",
    value: OfficeTag,
  },
];
const renderTagss = tagss.map((tags) => {
  return tags.value.map((tag) => {
    return (
      <li key={tag}>
        <Link to={`/courses/${tags.id.toLowerCase()}/${tag}`}>
          {tag} <span></span>
        </Link>
      </li>
    );
  });
});
export default renderTagss;
