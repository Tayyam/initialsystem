import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Users, 
  Building2, 
  Route, 
  Calendar,
  CheckCircle,
  Hotel,
  Plane,
  Tent,
  Clock,
  Shield,
  HeartHandshake
} from 'lucide-react';

type Props = {
  onStart: () => void;
};

export const LandingPage = ({ onStart }: Props) => {
  const features = [
    {
      icon: Users,
      title: 'إدارة الحجاج',
      description: 'إدارة سهلة وفعالة لجميع الحجاج وتنظيم رحلاتهم'
    },
    {
      icon: Building2,
      title: 'إدارة الفنادق',
      description: 'إدارة حجوزات الفنادق والغرف بكفاءة عالية'
    },
    {
      icon: Route,
      title: 'تخطيط المسارات',
      description: 'تخطيط وتنظيم مسارات الحج بشكل مثالي'
    },
    {
      icon: Calendar,
      title: 'جدولة الرحلات',
      description: 'جدولة وتنظيم مواعيد الرحلات والزيارات'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'توفير الوقت والجهد',
      description: 'تقليل الوقت المستغرق في إدارة الحجوزات والمتابعة'
    },
    {
      icon: Shield,
      title: 'موثوقية وأمان',
      description: 'نظام آمن وموثوق به لحماية بيانات الحجاج والحجوزات'
    },
    {
      icon: HeartHandshake,
      title: 'دعم متواصل',
      description: 'فريق دعم فني متخصص على مدار الساعة'
    }
  ];

  const services = [
    {
      icon: Hotel,
      title: 'خدمات الإقامة',
      items: [
        'حجز الفنادق في مكة والمدينة',
        'إدارة الغرف وتوزيع الحجاج',
        'متابعة حالة الحجوزات',
        'تقارير الإشغال والتوزيع'
      ]
    },
    {
      icon: Plane,
      title: 'خدمات النقل',
      items: [
        'حجز تذاكر الطيران',
        'تنظيم النقل البري',
        'جدولة المواصلات',
        'متابعة حركة الحجاج'
      ]
    },
    {
      icon: Tent,
      title: 'خدمات المخيمات',
      items: [
        'إدارة مخيمات منى وعرفات',
        'توزيع الحجاج على المخيمات',
        'تنظيم الخدمات والوجبات',
        'متابعة احتياجات الحجاج'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <motion.img 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            src="https://ithraa.group/wp-content/uploads/2024/11/%D8%A5%D8%AB%D8%B1%D8%A7%D8%A1-%D8%A7%D9%84%D8%AE%D9%8A%D8%B1%D9%A1-1959x2048.png"
            alt="إثراء الخير"
            className="h-32 mx-auto mb-8"
          />
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            نظام إدارة باقات الحج المباشر
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            حل متكامل لإدارة باقات الحج بكفاءة عالية، يشمل إدارة الفنادق والمخيمات والحجوزات
          </motion.p>
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onStart}
            className="bg-primary-500 text-white px-8 py-4 rounded-xl text-lg font-medium
                     hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl
                     flex items-center gap-2 mx-auto"
          >
            <span>ابدأ الآن</span>
            <ArrowLeft size={20} />
          </motion.button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-primary-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="text-primary-500" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-right">{feature.title}</h3>
              <p className="text-gray-600 text-right">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Services Section */}
        <div className="mt-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            خدماتنا المتكاملة
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="bg-primary-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="text-primary-500" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-right">{service.title}</h3>
                <ul className="space-y-3 text-right">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center justify-end gap-2">
                      <span className="text-gray-600">{item}</span>
                      <CheckCircle className="text-primary-500 shrink-0" size={16} />
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            مميزات النظام
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-primary-500" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-8 border-t mt-32">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-600">
            <p className="mb-2">جميع الحقوق محفوظة © {new Date().getFullYear()} لشركة رحاب</p>
            <p className="text-sm">نظام متكامل لإدارة باقات الحج </p>
          </div>
        </div>
      </footer>
    </div>
  );
};