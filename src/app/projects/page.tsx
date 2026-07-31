import Image from "next/image";

import grasp from "../assets/projects/grasp.png";
import nerv from "../assets/projects/nerv.png";
import charm from "../assets/projects/charm.png";

const Projects = () => {
    return (
        <main className="relative flex flex-col">

            {/* GRASP */}
            <section className="w-full px-6 md:px-20 py-20">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">

                    <div className="w-full md:w-2/5">
                        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                            <Image
                                src={grasp}
                                alt="GRASP Project"
                                fill
                                className="object-contain p-4"
                                priority
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-3/5">
                        <p className="text-xs text-secondary tracking-widest mb-3">
                            1 / 3
                        </p>

                        <h2 className="text-3xl md:text-5xl mb-6 tracking-tight">
                            GRASP
                        </h2>

                        <p className="text-lg md:text-xl text-foreground leading-relaxed">
                            GRASP is our smart prosthetic arm project, designed for
                            a trans-radial forearm amputee. It combines mechanical,
                            electrical, and analytical systems to create a functional
                            prosthetic device.
                        </p>

                        <p className="text-lg md:text-xl text-foreground leading-relaxed mt-5">
                            The system uses electromyography (EMG) to interpret
                            muscle activity and translate it into movement, alongside
                            mechanical systems for grasping and wrist motion.
                        </p>
                    </div>

                </div>
            </section>

            {/* NERV */}
            <section className="w-full px-6 md:px-20 py-20">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">

                    <div className="w-full md:w-2/5">
                        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                            <Image
                                src={nerv}
                                alt="NERV Project"
                                fill
                                className="object-contain p-4"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-3/5 text-right">
                        <p className="text-xs text-secondary tracking-widest mb-3">
                            2 / 3
                        </p>

                        <h2 className="text-3xl md:text-5xl mb-6 tracking-tight">
                            NERV
                        </h2>

                        <p className="text-lg md:text-xl text-foreground leading-relaxed">
                            NERV is our brain-computer interface (BCI) project,
                            which uses electroencephalography (EEG) signals
                            to allow non-invasive control of external devices.
                        </p>

                        <p className="text-lg md:text-xl text-foreground leading-relaxed mt-5">
                            NERV combines EEG signal processing, data analysis,
                            and machine learning to interpret brain activity and
                            translate it into commands. The project explores how
                            non-invasive BCIs can provide alternative methods of
                            communication and control for individuals with
                            physical disabilities.
                        </p>
                    </div>

                </div>
            </section>

            {/* CHARM */}
            <section className="w-full px-6 md:px-20 py-20">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">

                    <div className="w-full md:w-2/5">
                        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                            <Image
                                src={charm}
                                alt="CHARM Project"
                                fill
                                className="object-contain p-4"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-3/5">
                        <p className="text-xs text-secondary tracking-widest mb-3">
                            3 / 3
                        </p>

                        <h2 className="text-3xl md:text-5xl mb-6 tracking-tight">
                            CHARM
                        </h2>

                        <p className="text-lg md:text-xl text-foreground leading-relaxed">
                            CHARM is our newest project, a mechanical prosthetic arm used
                            to experiment with new ideas and mechanisms for GRASP.
                        </p>

                        <p className="text-lg md:text-xl text-foreground leading-relaxed mt-5">
                            The project focuses on mechanical systems for
                            grasping, finger actuation, wrist rotation, and
                            overall arm functionality. CHARM provides a platform
                            for testing concepts and exploring techniques that 
                            can help the development of GRASP.
                        </p>
                    </div>

                </div>
            </section>

        </main>
    );
};

export default Projects;
