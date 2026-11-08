'use client'

import { Card, CardContent, CardHeader, CardTitle }  from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {Users, MessageCircle, Settings, Heart, User, Globe, Calendar, Layout, Image, FileText, Star} from 'lucide-react';

export default function ProfilePage() {
  const user = {
    name: 'Takamatsu',
    position: 'Веб‑разработчик',
    username: '@takamatsu_17',
    bio: 'Создаю красивые и функциональные веб‑приложения. Верю в силу чистого кода и интелект нейроных сетей, а еще в доту 2.',
    avatar: '',
    stats: {
      posts: 322,
      followers: 856,
      following: 243,
      likes: 2281467
    },
    skills: ['React', 'Next.js', 'Tailwind', 'TypeScript', 'Node.js',  'PYTHOOOON', 'А так на миду и в кора встаю'],
    contacts: {
      email: 'takamatsu090204@gmail.com',
      website: 'DOTA.com',
      social: ['GitHub', 'twitch'],
      registrationDate: '2026-11-08'
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Шапка профиля */}
      <div className="container mx-auto px-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <Avatar className="h-24 w-24 self-center md:self-start">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center md:text-left">
                <CardTitle className="text-2xl mb-2">{user.name}</CardTitle>
                <p className="text-lg text-gray-600 mb-2">{user.position}</p>
                <p className="text-gray-500 mb-4">{user.username}</p>
                <p className="text-gray-700 mb-6">{user.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <Button variant="outline">Редактировать профиль</Button>
                  <Button variant="outline">Поделиться</Button>
                  <Button variant="ghost" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Блок статистики */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <Users className="h-6 w-6 mx-auto text-blue-500 mb-2" />
            <div className="font-semibold">{user.stats.posts}</div>
            <div className="text-sm text-gray-500">Публикации</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <MessageCircle className="h-6 w-6 mx-auto text-green-500 mb-2" />
            <div className="font-semibold">{user.stats.followers}</div>
            <div className="text-sm text-gray-500">Подписчики</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <Heart className="h-6 w-6 mx-auto text-red-500 mb-2" />
            <div className="font-semibold">{user.stats.following}</div>
            <div className="text-sm text-gray-500">Подписки</div>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <Heart className="h-6 w-6 mx-auto text-pink-500 mb-2" />
            <div className="font-semibold">{user.stats.likes}</div>
            <div className="text-sm text-gray-500">Лайки</div>
          </div>
        </div>

        {/* Секция «О себе» */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>О себе</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{user.bio}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {user.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-gray-500" />
                <span>{user.contacts.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-gray-500" />
                <span>{user.contacts.website}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span>Зарегистрирована: {new Date(user.contacts.registrationDate).toLocaleDateString('ru-RU')}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Навигация по контенту (Табы) */}
        <div className="mt-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {['Все посты', 'Медиа', 'Документы', 'Избранное'].map((tab) => (
                <a
                  key={tab}
                  href="#"
                  className="whitespace-nowrap border-b-2 border-transparent px-1 pb-4 font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300"
                >
                  {tab}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Подвал */}
      <footer className="bg-white border-t border-gray-200 mt-12 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="font-bold text-lg">MyPlatform</span>
              <span className="ml-2 text-gray-500">© 2026 Название. Все права защищены</span>
            </div>
            <div className="hidden md:flex space-x-6 mb-4 md:mb-0 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-700">О нас</a>
              <a href="#" className="hover:text-gray-700">Поддержка</a>
              <a href="#" className="hover:text-gray-700">Блог</a>
              <a href="#" className="hover:text-gray-700">Вакансии</a>
            </div>
            <div className="flex space-x-4 mb-4 md:mb-0 text-gray-500 text-sm">
              <a href="#" className="hover:text-gray-700">Конфиденциальность</a>
              <span>|</span>
              <a href="#" className="hover:text-gray-700">Условия использования</a>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.597999999999998C24 4.266999999999997 23.733 4 23.402 4H20.598C20.267 4 20 4.266999999999997 20 4.597999999999998V7.401999999999996H24V4.597999999999998ZM18.403 4.597999999999998C18.403 4.266999999999997 18.136 4 17.805 4H14.999C14.668 4 14.401 4.266999999999997 14.401 4.597999999999998V19.401999999999994C14.401 19.732999999999993 14.668 19.999999999999993 14.999 19.999999999999993H17.805C18.136 19.999999999999993 18.403 19.732999999999993 18.403 19.401999999999994V13.802999999999995H21.599V16.606999999999992C21.599 16.93799999999999 21.866 17.20499999999999 22.197 17.20499999999999H24C24.331 17.20499999999999 24.598 16.93799999999999 24.598 16.606999999999992V13.802999999999995C24.598 13.471999999999994 24.331 13.204999999999994 24 13.204999999999994H21.599V4.597999999999998H18.403Z" />
                </svg>
              </Button>
              <Button variant="ghost" size="icon">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.597999999999998C24 4.266999999999997 23.733 4 23.402 4H20.598C20.267 4 20 4.266999999999997 20 4.597999999999998V7.401999999999996H24V4.597999999999998ZM18.403 4.597999999999998C18.403 4.266999999999997 18.136 4 17.805 4H14.999C14.668 4 14.401 4.266999999999997 14.401 4.597999999999998V19.401999999999994C14.401 19.732999999999993 14.668 19.999999999999993 14.999 19.999999999999993H17.805C18.136 19.999999999999993 18.403 19.732999999999993 18.403 19.401999999999994V13.802999999999995H21.599V16.606999999999992C21.599 16.93799999999999 21.866 17.20499999999999 22.197 17.20499999999999H24C24.331 17.20499999999999 24.598 16.93799999999999 24.598 16.606999999999992V13.802999999999995C24.598 13.471999999999994 24.331 13.204999999999994 24 13.204999999999994H21.599V4.597999999999998H18.403Z" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
