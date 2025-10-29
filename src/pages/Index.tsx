import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowRight,
  CalendarCheck,
  ClipboardList,
  Dumbbell,
  Salad,
  Shield,
  Sparkles,
} from 'lucide-react';
import heroImage from '@/assets/ayurwell-hero.jpg';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import AmbientGlow from '@/components/AmbientGlow';

const features = [
  {
    title: 'User Profile',
    desc: 'Create and manage your health profile.',
    icon: Shield,
  },
  {
    title: 'Prakriti Analysis',
    desc: 'Discover your Vata, Pitta, or Kapha.',
    icon: ClipboardList,
  },
  {
    title: 'Diet Chart',
    desc: 'Personalized diet for your Prakriti.',
    icon: Salad,
  },
  {
    title: 'Daily Schedule',
    desc: 'Routine for balance and vitality.',
    icon: Dumbbell,
  },
  {
    title: 'Follow-ups',
    desc: 'Set reminders and track progress.',
    icon: CalendarCheck,
  },
  {
    title: 'Admin Panel',
    desc: 'Manage users and follow-ups.',
    icon: Sparkles,
  },
];

const Index = () => {
  return (
    <div>
      <SEO
        title='AyurWell — Ayurveda Health Guidance'
        description='Personalized Ayurveda guidance: profile, Prakriti test, diet chart, daily schedule, and follow-ups.'
        canonical='/'
      />
      <AmbientGlow />

      {/* Hero Section */}
      <section className='container mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12'>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className='flex-1'
        >
          <h1 className='text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-green-500 via-emerald-400 to-lime-400 text-transparent bg-clip-text'>
            AyurWell — Ayurveda-based Health Guidance
          </h1>
          <p className='text-muted-foreground text-lg md:text-xl mb-8 max-w-lg'>
            Understand your <b>Prakriti</b> and receive tailored diet plans and
            daily routines, grounded in classical Ayurveda.
          </p>
          <div className='flex items-center gap-4'>
            <Button
              asChild
              size='lg'
              className='shadow-md shadow-emerald-400/20'
            >
              <Link to='/dashboard'>Get Started</Link>
            </Button>
            <Button asChild variant='outline' size='lg'>
              <Link to='/admin'>Admin Panel</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className='flex-1 flex justify-center'
        >
          <img
            src={heroImage}
            alt='Ayurveda herbs and spices'
            className='rounded-3xl border border-emerald-200 shadow-lg shadow-green-200/40 max-w-md'
          />
        </motion.div>
      </section>

      {/* Features */}
      <section className='container mx-auto px-6 pb-24'>
        <h2 className='text-center text-3xl md:text-4xl font-bold mb-14'>
          Everything you need for{' '}
          <span className='text-emerald-500'>balanced wellness</span>
        </h2>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map(({ title, desc, icon: Icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className='backdrop-blur-md bg-white/10 border border-emerald-100/20 hover:border-emerald-300/50 hover:shadow-emerald-200/40 transition-all duration-300 transform hover:-translate-y-2'>
                <CardHeader>
                  <div className='flex items-center gap-3'>
                    <span className='inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100/20 border border-emerald-300/30'>
                      <Icon className='text-emerald-400' />
                    </span>
                    <CardTitle className='text-lg font-semibold'>
                      {title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground mb-4'>{desc}</p>
                  <Button
                    asChild
                    variant='link'
                    className='px-0 text-emerald-500 hover:text-emerald-400'
                  >
                    <Link
                      to={title === 'Admin Panel' ? '/admin' : '/dashboard'}
                      className='inline-flex items-center gap-1'
                    >
                      Learn more <ArrowRight className='inline-block' />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
