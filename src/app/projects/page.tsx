const Projects = () => {
    return (
        <main className="relative flex flex-col items-center justify-center">

            {/* GRASP */}
            <section className="w-full px-6 md:px-20 py-20 flex flex-col items-center">
                <p className="text-xs text-secondary tracking-widest">1 / 2</p>
                <h2 className="text-3xl md:text-5xl mb-8 tracking-tight">GRASP</h2>

                <p className="text-lg md:text-xl text-foreground p-4 w-full md:w-5/6">
                GRASP is our pilot project, a smart prosthetic arm integrating electromyography, computer vision, and 3D printing techniques, designed for a trans-radial forearm amputee!
                </p>
                <p className="text-lg md:text-xl text-foreground p-4 w-full md:w-5/6">
                Our current design features a variety of funtionalities including the following:
                </p>

                <ul className="text-lg md:text-xl text-foreground p-4 w-full md:w-5/6 list-disc list-inside">
                    <li>Analysis of EMG data to control the hands (ANA)</li>
                    <li>Grip optimization that utilizes a camera on-board the arm for object recognition (ANA)</li>
                    <li>Integration with machine learning (ANA)</li>
                    <li>Translation of EMG signals into mechanical motion (EMB)</li>
                    <li>Design core framework that interfaces with outputs provided by electrical and analytical subteams (EMB)</li>
                    <li>Implementation of signal processing (Rust and Python)</li>
                    <li>Improved finger actuation to optimize physical grips (MECH)</li>
                    <li>Use of ergonomic shouler brace for minimized load (MECH)</li>
                    <li>Integration of wrist rotation and passive locking mechanism (MECH)</li>
                </ul>
            </section>

            {/* NERV */}
            <section className="w-full px-6 md:px-20 py-20 flex flex-col items-center">
                <p className="text-xs text-secondary tracking-widest">2 / 2</p>
                <h2 className="text-3xl md:text-5xl mb-8 tracking-tight">NERV</h2>

                <p className="text-lg md:text-xl text-foreground p-4 w-full md:w-5/6">
                NERV is our current design of a brain-computer interface (BCI) aiming to process EEG signals to autonomously control an output device, such as a video game, for individuals paralyzed from the neck below.
                </p>
                <p className="text-lg md:text-xl text-foreground p-4 w-full md:w-5/6">
                More information on NERV will be available soon!
                </p>
            </section>

        </main>
    );
}

export default Projects;