
import { useState, useEffect } from 'react';
import { ArrowRight, Target, Cog, FileText, Users, Calendar, Award, CheckCircle } from 'lucide-react';
import Button from '../components/Button';

const Home = () => {

    const [timeLeft, setTimeLeft] = useState({
        days: 37,
        hours: 6,
        minutes: 55,
        seconds: 11
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                } else if (prev.days > 0) {
                    return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const features = [
        {
            icon: <Target size={48} />,
            title: "Real Problem Statements",
            description: "Uses real startup/corporate problem statements as the foundation for learning."
        },
        {
            icon: <Cog size={48} />,
            title: "Learn by Solving",
            description: "Enables students to learn by solving, not just watching, which is critical for developing problem-solving and problem-identification aptitude."
        },
        {
            icon: <FileText size={48} />,
            title: "Project Portfolios",
            description: "Builds valuable project portfolios with deployable solutions and direct internship pipelines."
        }
    ];

    const journeySteps = [
        {
            number: "1",
            icon: <Target size={24} />,
            title: "Theme Selection",
            description: "Focus on key in-demand areas (e.g., GenAI, Data Science, Full-Stack, Cybersecurity, IoT, AR/VR)."
        },
        {
            number: "2",
            icon: <Calendar size={24} />,
            title: "Duration",
            description: "4-5 weeks of intensive engagement."
        },
        {
            number: "3",
            icon: <Users size={24} />,
            title: "Learning Format",
            description: "Live Virtual Masterclasses (10 hours), continuous mentorship support with weekly assignments."
        },
        {
            number: "4",
            icon: <Award size={24} />,
            title: "Outcome",
            description: "Students build deployable projects addressing real-world challenges."
        }
    ];

    return (
        <div className="container mx-auto my-12 flex flex-col gap-16">

            <section className="text-center flex flex-col gap-10">

                <div className="flex flex-col gap-4">
                    <div className='flex justify-center animate-hover'>
                        <img src="./logo.png" alt="logo" className='h-[20vh]' />
                    </div>
                    <h1 className="text-7xl font-bold leading-tight">
                        <span className="text-secondary">Be </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary/70 to-primary/70">AI</span>
                        <span className="text-primary"> Ready</span>
                    </h1>
                    <h2 className="text-4xl">
                        And Ready for What AI Can't Do
                    </h2>
                    <p className='text-2xl'>
                        Be prepared for an AI-driven future by mastering what AI can't replace:
                        <br />
                        real-world problem-solving and problem-discovery.
                    </p>
                </div>

                <div className="flex gap-4 justify-center">
                    <Button customClasses='text-lg text-base1'>
                        Join the Cohort
                        <ArrowRight />
                    </Button>
                    <Button customClasses='text-lg bg-transparent border-3 border-primary text-primary hover:bg-transparent backdrop-blur-sm'>Become a Partner</Button>
                </div>

                <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-semibold">Next Cohort Starting Soon</h3>
                    <div className="grid grid-cols-4 gap-8 p-8 rounded-xl backdrop-blur-sm shadow-lg bg-base1/20">
                        <div className="text-center">
                            <div className="bg-secondary rounded-xl p-4 mb-2">
                                <div className="text-4xl font-bold text-white">{timeLeft.days.toString().padStart(2, '0')}</div>
                            </div>
                            <div className="text-secondary text-sm font-medium">Days</div>
                        </div>
                        <div className="text-center">
                            <div className="bg-secondary rounded-lg p-4 mb-2">
                                <div className="text-4xl font-bold text-white">{timeLeft.hours.toString().padStart(2, '0')}</div>
                            </div>
                            <div className="text-secondary text-sm font-medium">Hours</div>
                        </div>
                        <div className="text-center">
                            <div className="bg-secondary rounded-lg p-4 mb-2">
                                <div className="text-4xl font-bold text-white">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                            </div>
                            <div className="text-secondary text-sm font-medium">Minutes</div>
                        </div>
                        <div className="text-center">
                            <div className="bg-secondary rounded-lg p-4 mb-2">
                                <div className="text-4xl font-bold text-white">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                            </div>
                            <div className="text-secondary text-sm font-medium">Seconds</div>
                        </div>
                    </div>

                </div>

            </section>


            <section className="text-center flex flex-col gap-10">

                <div className="bg-primary/85 backdrop-blur-sm p-12 rounded-3xl flex flex-col gap-6 shadow-lg">
                    <h2 className="text-6xl font-bold text-base1">
                        The AI Era Demands More Than Code.
                    </h2>
                    <h3 className="text-6xl font-bold text-secondary">
                        It Demands Problem-Solvers.
                    </h3>
                    <p className="text-xl text-base1">
                        Turiya Prakalpa: Empowering India's Next Generation of Innovators Through Real-World Challenges.
                    </p>
                    <div className="flex gap-4 justify-center text-lg">
                        <Button bg={true} customClasses='py-4 px-8'>
                            <Users size={20} />
                            Join The Cohort
                        </Button>
                        <Button customClasses='bg-secondary hover:bg-dark-secondary py-4 px-8'>
                            Become a Partner
                        </Button>
                    </div>
                </div>


                <div className="text-center flex flex-col gap-6">
                    <h2 className="text-4xl font-bold">
                        <span className='text-primary'>Real projects. </span>
                        <span>Problem-solving. </span>
                        <span className='text-secondary'>Career-ready for the AI era. </span>
                    </h2>
                    <p className="text-2xl">
                        The future belongs to those who can identify the right problems and build solutions—AI is just the tool.
                        Our mission is to empower students to become problem-solvers.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-8 rounded-xl border-3 backdrop-blur-sm shadow-lg bg-base1/20 border-secondary transition-all hover:scale-105 text-center flex flex-col gap-4">
                            <div className="flex justify-center text-secondary">{feature.icon}</div>
                            <h3 className="text-2xl font-semibold text-secondary">{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="text-center flex flex-col gap-10">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-primary mb-4">The Journey: Your Cohort Experience</h2>
                    <p className="text-lg">Continuous mentorship support through weekly sessions</p>
                </div>

                <div className="grid grid-cols-4 gap-8">
                    {journeySteps.map((step, index) => (
                        <div key={index} className="backdrop-blur-sm shadow-lg p-6 rounded-xl bg-base1/20 border-3 transition-all hover:scale-105 border-primary text-center flex flex-col gap-4 item-center">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-base1 font-bold text-2xl mx-auto">
                                {step.number}
                            </div>
                            <div className="flex justify-center text-primary">{step.icon}</div>
                            <h3 className="text-2xl font-bold text-primary">{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="text-center flex flex-col gap-10">
                <h2 className="text-4xl font-bold text-secondary">Join a Challenge. See the Impact.</h2>
                <div className="shadow-lg backdrop-blur-sm p-8 rounded-2xl flex flex-col gap-8 bg-secondary/70 text-base1">
                    <h3 className="text-4xl font-bold">🔥 GenAI Challenge: Starting Soon</h3>
                    <div className="grid grid-cols-3 gap-6">
                        <div>
                            <div className="text-2xl font-bold">4-5 Weeks</div>
                            <div>Duration</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold">₹4,999</div>
                            <div>Investment</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold">Limited</div>
                            <div>Seats Available</div>
                        </div>
                    </div>
                    <p className="text-lg">
                        Build cutting-edge GenAI solutions that solve real startup problems and create portfolio-worthy projects.
                    </p>
                    <div className="flex flex-row gap-4 justify-center">
                        <Button>🚀 Secure Your Spot</Button>
                        <Button>Learn More</Button>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-4 items-center">
                <h2 className="text-4xl font-bold text-primary">Think You're Ready?</h2>
                <h3 className="text-2xl font-semibold text-secondary mb-8">AI Readiness Quiz</h3>
                <p className="text-xl text-base3">
                    Engaging, visual quiz to hook students, assess their readiness, and convert them to your cohort funnel.
                </p>
                <Button bg={true} customClasses='text-lg py-4 px-8'>
                    <CheckCircle size={24} />
                    Take the Quiz
                </Button>
            </section>

            <section className="text-center flex flex-col gap-10">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-secondary mb-2">Our Growing Ecosystem</h2>
                    <p className="text-lg text-base3">Institutions, Ecosystem Partners, Experts</p>
                </div>

                <div className="grid grid-cols-2 gap-10 items-center">
                    <div className='flex flex-col gap-4 items-center'>
                        <h3 className="text-3xl font-bold">Indore Tech Synergy Fest</h3>
                        <p className="text-lg text-base3">
                            Join the biggest tech convergence in Central India. Connect with industry leaders,
                            showcase your innovations, and be part of the future of technology.
                        </p>
                        <Button disabled={true}>
                            Coming Soon!
                        </Button>
                    </div>
                    <div className="backdrop-blur-sm p-8 rounded-xl shadow-lg bg-base1/20">
                        <div className="grid grid-cols-2 gap-6 text-center">
                            <div>
                                <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                                <div className="text-base3">Partner Institutions</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                                <div className="text-base3">Industry Experts</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-secondary mb-2">1000+</div>
                                <div className="text-base3">Students Empowered</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                                <div className="text-base3">Real Projects</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-center flex flex-col gap-10">
                <div>
                    <h2 className="text-4xl font-bold text-primary mb-4">Ready to Become a Problem-Solver?</h2>
                    <p className="text-lg">Join the next generation of innovators who are mastering what AI can't replace.</p>
                </div>
                <div className="flex flex-row gap-4 justify-center">
                    <Button customClasses='text-lg py-4 px-8'>
                        Become a Partner
                    </Button>
                    <Button bg={true} customClasses='text-lg py-4 px-8'>
                        Join the Cohort
                        <ArrowRight size={24} />
                    </Button>
                </div>
            </section>

        </div>
    );
};

export default Home;