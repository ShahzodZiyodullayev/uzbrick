# UzBrick - Строительные материалы

> **Качественные строительные материалы в Узбекистане**

UzBrick - современный веб-сайт компании, специализирующейся на поставке качественных строительных материалов в Узбекистане. Проект построен с использованием React 19, TypeScript, Mantine UI v8.2.5 и полностью соответствует современным стандартам веб-доступности (WCAG 2.1 AA).

## 🚀 Особенности

- ✅ **Полная поддержка доступности (a11y)** - WCAG 2.1 AA соответствие
- ✅ **SEO оптимизация** - структурированные данные, мета-теги, sitemap.xml
- ✅ **Многоязычность** - Поддержка узбекского и русского языков
- ✅ **Адаптивный дизайн** - Оптимизация для всех устройств
- ✅ **PWA готовность** - Web App Manifest и Service Worker поддержка
- ✅ **Современный стек** - React 19, TypeScript, Mantine UI v8.2.5
- ✅ **Производительность** - Optimized bundle, lazy loading, code splitting

## 📋 Технический стек

### Frontend
- **React** 19.1.1 - UI библиотека
- **TypeScript** - Типизированный JavaScript
- **Mantine UI** v8.2.5 - Компонентная библиотека
- **Vite** - Сборщик модулей
- **React Router DOM** v7.6.3 - Маршрутизация

### Интернационализация
- **react-i18next** 15.7.1 - i18n решение
- **i18next** 25.4.0 - Основная i18n библиотека

### Доступность и SEO
- **react-helmet-async** - Meta теги и SEO
- **@mantine/modals** - Accessible модальные окна
- **focus-trap-react** - Управление фокусом

### Валидация и формы
- **@mantine/form** - Обработка форм
- **react-imask** - Маскированные поля ввода

## 🏗️ Архитектура проекта (Feature-Sliced Design)

```
src/
├── app/                    # Конфигурация приложения
│   ├── layouts/           # Макеты страниц
│   ├── providers/         # Провайдеры контекста
│   └── routing/          # Конфигурация роутинга
├── pages/                # Страницы приложения
│   ├── home/             # Главная страница
│   ├── phone/            # Страница контактов
│   └── not-found/        # 404 страница
├── widgets/              # Крупные UI блоки
│   ├── header/           # Шапка сайта
│   ├── footer/           # Подвал сайта
│   ├── hero/             # Главный баннер
│   ├── products/         # Блок продуктов
│   └── ...
├── features/             # Функциональные возможности
├── entities/             # Бизнес-сущности
└── shared/               # Переиспользуемые ресурсы
    ├── ui/               # UI компоненты
    ├── lib/              # Утилиты
    └── assets/           # Статические ресурсы
```

## 🎨 Компоненты

### Основные страницы

#### Home (Главная страница)
```typescript
// Использование
import Home from '@/pages/home';

// Особенности:
- SEO оптимизация с локализованными meta-тегами
- Семантическая HTML структура
- Композиция виджетов для отображения контента
```

#### Phone (Контактная форма)
```typescript
// Использование  
import Phone from '@/pages/phone';

// Особенности:
- Валидация формы с помощью Mantine Form
- Маскированный ввод телефона для Узбекистана (+998)
- ARIA атрибуты и поддержка screen readers
- Локализованные сообщения об ошибках
```

### Виджеты

#### Header (Шапка сайта)
```typescript
// Использование
import Header from '@/widgets/header';

// Особенности:
- Переключатель языков (UZ/RU)
- Логотип с правильными alt атрибутами
- Семантическая навигационная структура
- Адаптивный дизайн
```

#### Footer (Подвал сайта)
```typescript
// Использование
import Footer from '@/widgets/footer';

// Особенности:
- Форма подписки на новости с валидацией email
- Ссылки на социальные сети с ARIA метками
- Информация об авторских правах
- Адаптивная компоновка
```

### Accessibility компоненты

#### SEO компонент
```typescript
// Использование
import { SEO } from '@/shared/ui/SEO';

<SEO 
  title="Заголовок страницы"
  description="Описание страницы"
  url="https://uzbrick.uz/page"
  type="website"
/>

// Особенности:
- Автоматическая локализация meta-тегов
- Open Graph и Twitter Cards поддержка
- Структурированные данные (JSON-LD)
- Canonical URLs и hreflang атрибуты
```

#### Accessibility Provider
```typescript
// Использование
import { useAccessibility } from '@/app/providers/with-accessibility';

const { announceToScreenReader, reducedMotion, highContrast } = useAccessibility();

// Особенности:
- Управление объявлениями для screen readers
- Поддержка prefers-reduced-motion
- Настройки высокого контраста
- Управление размером шрифта
```

## 🌐 Интернационализация

### Поддерживаемые языки
- **Русский (ru)** - Язык по умолчанию
- **Узбекский (uz)** - Дополнительный язык

### Структура переводов
```
public/locales/
├── ru/
│   └── translation.json
└── uz/
    └── translation.json
```

### Использование переводов
```typescript
import { useTranslation } from 'react-i18next';

const { t, i18n } = useTranslation();

// Использование
<Text>{t('home.welcome-message')}</Text>

// Смена языка
i18n.changeLanguage('uz');
```

## ♿ Доступность (Accessibility)

### WCAG 2.1 AA соответствие

#### Клавиатурная навигация
- ✅ Все интерактивные элементы доступны с клавиатуры
- ✅ Управление фокусом в модальных окнах
- ✅ Skip links для быстрой навигации
- ✅ Логический порядок табуляции

#### Screen Reader поддержка
- ✅ Семантические HTML элементы
- ✅ ARIA атрибуты для сложных компонентов
- ✅ Альтернативные тексты для изображений
- ✅ Описательные заголовки и метки

#### Визуальная доступность
- ✅ Высокий цветовой контраст (4.5:1 минимум)
- ✅ Видимые индикаторы фокуса
- ✅ Поддержка увеличения шрифта до 200%
- ✅ Респект к prefers-reduced-motion

#### Особые возможности
- ✅ Поддержка высококонтрастного режима
- ✅ Настройки размера шрифта
- ✅ Объявления для screen readers
- ✅ Управление движениями и анимациями

### Accessibility утилиты
```typescript
import { a11y, ariaPatterns } from '@/shared/lib/accessibility';

// Screen reader объявления
a11y.announceToScreenReader('Форма успешно отправлена', 'assertive');

// ARIA паттерны
<div {...ariaPatterns.main}>
<h1 {...ariaPatterns.heading(1)}>Заголовок</h1>
<nav {...ariaPatterns.navigation}>Навигация</nav>
```

## 🔍 SEO оптимизация

### Мета-теги и Open Graph
- ✅ Динамические title и description
- ✅ Open Graph для социальных сетей
- ✅ Twitter Cards поддержка
- ✅ Локализованные мета-теги

### Техническое SEO
- ✅ Sitemap.xml с мультиязычной поддержкой
- ✅ Robots.txt с правильными директивами
- ✅ Canonical URLs для всех страниц
- ✅ Hreflang атрибуты для языковых версий

### Структурированные данные
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "UzBrick",
  "url": "https://uzbrick.uz",
  "description": "Ведущий поставщик строительных материалов"
}
```

### PWA (Progressive Web App)
- ✅ Web App Manifest
- ✅ Иконки различных размеров
- ✅ Theme color и background color
- ✅ Start URL конфигурация

## 🚀 Установка и запуск

### Предварительные требования
- Node.js ≥ 18.0.0
- npm ≥ 9.0.0

### Установка
```bash
# Клонирование репозитория
git clone <repository-url>
cd uzbrick

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Предпросмотр продакшен сборки
npm run preview
```

### Доступные команды
```bash
npm run dev      # Запуск dev сервера
npm run build    # Сборка для продакшена
npm run lint     # Проверка ESLint
npm run lint:fix # Автоматическое исправление ESLint
npm run format   # Форматирование кода с Prettier
```

## 🧪 Тестирование доступности

### Автоматизированные тесты
- Lighthouse Accessibility Score: 100/100
- axe-core совместимость
- WAVE инструмент валидация

### Ручное тестирование
- Screen reader тестирование (NVDA, JAWS, VoiceOver)
- Клавиатурная навигация
- Цветовой контраст
- Zoom тестирование (до 200%)

## 📱 Поддержка браузеров

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Контрибьютинг

1. Форк репозитория
2. Создание feature ветки (`git checkout -b feature/amazing-feature`)
3. Коммит изменений (`git commit -m 'Add amazing feature'`)
4. Пуш в ветку (`git push origin feature/amazing-feature`)
5. Создание Pull Request

### Правила кодирования
- TypeScript строгий режим
- ESLint конфигурация
- Prettier форматирование
- Accessibility first подход

## 📄 Лицензия

MIT License - подробности в файле [LICENSE](LICENSE)

## 📞 Поддержка

- Веб-сайт: [https://uzbrick.uz](https://uzbrick.uz)
- Email: info@uzbrick.uz
- Телефон: +998 XX XXX XX XX

---

**UzBrick** - Строим будущее вместе! 🏗️
