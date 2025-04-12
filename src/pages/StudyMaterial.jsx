export default function StudyMaterial() {
  const materials = [
    {
      title: "Teach Yourself Java in 21 Days",
      link: "https://www.cs.cmu.edu/afs/cs.cmu.edu/user/gchen/www/download/java/LearnJava.pdf",
    },
    {
      title: "Introduction to Programming Using Java",
      link: "https://www.iitk.ac.in/esc101/share/downloads/javanotes5.pdf",
    },
    {
      title: "Java Notes for Professionals",
      link: "https://book.huihoo.com/goalkicker.com/JavaBook/JavaNotesForProfessionals.pdf",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-indigo-600">Study Materials</h2>
      <ul className="mt-4 space-y-2">
        {materials.map((material, index) => (
          <li key={index}>
            <a href={material.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              📘 {material.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}