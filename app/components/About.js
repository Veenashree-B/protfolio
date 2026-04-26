export default function About() {
  return (
    <section id="about" className="py-20 px-8 sm:px-12 bg-white text-black">
      <h2 className="text-5xl text-center font-bold mb-10 text-black">Educational Qualification</h2>

      <div className="mx-auto w-full max-w-5xl rounded-3xl card-bg p-8 border border-slate-200">
        <table className="w-full text-black text-center">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4">Course</th>
              <th className="py-2 px-4">Board/University</th>
              <th className="py-2 px-4">Institution</th>
              <th className="py-2 px-4">Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2 px-4">B.E. CSE - Data Science (2022-Current)</td>
              <td className="py-2 px-4">VTU Board</td>
              <td className="py-2 px-4">SJB Institute of Technology</td>
              <td className="py-2 px-4">8.3 CGPA</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 px-4">Higher Secondary (XII) (2020-2021)</td>
              <td className="py-2 px-4">Karnataka State PU Board</td>
              <td className="py-2 px-4">MES MPL Prof Sastry PU College</td>
              <td className="py-2 px-4">95.01%</td>
            </tr>
            <tr>
              <td className="py-2 px-4">Secondary (X) (2018-2019)</td>
              <td className="py-2 px-4">Karnataka Secondary Education Board</td>
              <td className="py-2 px-4">Swami Vivekananda English High School</td>
              <td className="py-2 px-4">92.64%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}