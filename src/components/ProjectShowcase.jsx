import { PROJECTS } from '../constants';

const ProjectShowcase = () => {
  return (
    <section
      className='container mx-auto max-w-6xl px-4 py-12 md:px-8'
      id='projects'
    >
      <div>
        <h2 className='my-8 text-center justify-center text-4xl font-semibold tracking-tighter'>
          Projects
        </h2>
      </div>

      <div className='space-y-16'>
        {PROJECTS.map((project, index) => (
          <div key={index}>
            <div className='flex flex-col items-center md:flex-row-reverse md:items-start'>
              <div className='w-full p-8 md:w-1/2'>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className='w-full mx-auto rounded-3xl'
                />
              </div>
              {/* project year, title and description */}
              <div className='w-full md:w-1/2'>
                <h2 className='mb-2 text-lg text-emerald-950'>
                  {project.year}
                </h2>
                <h3 className='mb-2 text-2xl font-semibold text-emerald-950'>
                  {project.title}
                </h3>
                {/* description */}
                <p className='mb-2 text-3xl text-emerald-950 lg:text-4xl'>
                  {project.description}
                </p>
                <p className='mb-4 text-lg text-emerald-950 lg:text-xl'>
                  {project.details}
                </p>

                {/* figures */}
                <table className='min-w-full text-lg lg:text-xl'>
                  <tbody>
                    <tr>
                      <td className='px-6 py-1 font-medium text-emerald-950'>
                        Investment
                      </td>
                      <td className='px-6 py-1 text-emerald-950'>
                        {project.figures.investment}
                      </td>
                    </tr>
                    <tr>
                      <td className='px-6 py-1 font-medium text-emerald-950'>
                        Duration
                      </td>
                      <td className='px-6 py-1 text-emerald-950'>
                        {project.figures.duration}
                      </td>
                    </tr>
                    <tr>
                      <td className='px-6 py-1 font-medium text-emerald-950'>
                        Outcomes
                      </td>
                      <td className='px-6 py-1 text-emerald-950'>
                        {project.figures.outcome}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {index < PROJECTS.length - 1 && (
              <hr className='my-8 border-t border-[1px] border-gray-300 w-8/12 mx-auto' />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
