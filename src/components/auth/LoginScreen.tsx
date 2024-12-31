import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Key, AlertCircle } from 'lucide-react';

type Props = {
  onLogin: () => void;
}

export const LoginScreen = ({ onLogin }: Props) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);

    // Simulate API call
    setTimeout(() => {
      if (password === '123456789') {
        localStorage.setItem('isAuthenticated', 'true');
        onLogin();
      } else {
        setError(true);
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center">
              <Lock className="w-8 h-8 text-primary-500" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">مرحباً بك</h1>
          <p className="text-gray-600 mt-2">يرجى إدخال كلمة المرور للمتابعة</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full pl-12 pr-4 py-3 border rounded-lg text-right focus:ring-2 transition-all
                  ${error 
                    ? 'border-red-300 focus:ring-red-200' 
                    : 'border-gray-300 focus:ring-primary-200'}`}
                placeholder="كلمة المرور"
                required
              />
              <Key className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 
                ${error ? 'text-red-400' : 'text-gray-400'}`} />
            </div>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 mt-2 text-red-500 text-sm"
              >
                <AlertCircle className="w-4 h-4" />
                <span>كلمة المرور غير صحيحة</span>
              </motion.div>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-4 rounded-lg text-white font-medium
              transition-all transform active:scale-95
              ${isLoading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-primary-500 hover:bg-primary-600 shadow-lg hover:shadow-xl'}`}
          >
            {isLoading ? 'جاري التحقق...' : 'دخول'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};