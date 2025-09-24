import { useState } from 'react';
import ActionBtn from '@components/ActionBtn/ActionBtn';

import LogoIcon from '@assets/Logo.svg?react';
import './home.scss';

function Home() {
    const [emailValue, setEmailValue] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSub = async (e) => {
        e.preventDefault();

        if (!emailValue.trim()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            console.log('Email отправлен:', emailValue);

            setSubmitStatus('success');
            setEmailValue('');

            setTimeout(() => {
                setSubmitStatus(null);
            }, 3000);
        } catch (error) {
            console.error('Ошибка при отправке:', error);
            setSubmitStatus('error');

            setTimeout(() => {
                setSubmitStatus(null);
            }, 3000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="content">
            <div>
                <div className="header">
                    <LogoIcon className="logoIcon" />
                    <h1 className="title">КАШТАНКА</h1>
                </div>
                <p className="subtitle">
                    Платформа для заводчиков и владельцев собак с удобной базой профилей,
                    возможностью продавать щенков и сервисами для собаководов
                </p>

                <div className="formContainer">
                    <form onSubmit={handleSub}>
                        <div className="groupFrom">
                            <p className="groupLabel">
                                Оставьте почту и получите приглашение на запуск
                            </p>
                            <input
                                className="groupInput"
                                type="email"
                                placeholder="Почта"
                                value={emailValue}
                                onChange={(e) => setEmailValue(e.target.value)}
                                disabled={isSubmitting}
                                required
                            />
                        </div>

                        <ActionBtn type="submit" disabled={isSubmitting || !emailValue.trim()}>
                            {isSubmitting ? 'Отправка...' : 'Подписаться'}
                        </ActionBtn>
                    </form>

                    {submitStatus === 'success' && (
                        <div className="notification success">
                            Спасибо! Приглашение будет отправлено на вашу почту
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <div className="notification error">
                            Произошла ошибка. Попробуйте еще раз
                        </div>
                    )}
                </div>

                <div className="contacts">
                    <p>Контакты для сотрудничества</p>

                    <a href="tel:+79999999999">+7 (999) 999-99-99</a>
                    <a href="mailto:kashanka@mail.ru">kashanka@mail.ru</a>
                </div>
            </div>

            <p className="company">© ООО «Формула», 2024—2025</p>
        </div>
    );
}

export default Home;
