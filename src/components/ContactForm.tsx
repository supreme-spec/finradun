"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle2, Loader2, User, MessageSquare, PhoneCall } from "lucide-react";
import styles from "./ContactForm.module.css";

export default function ContactForm({ lang = "ru" }: { lang?: "ru" | "en" }) {
  const isEn = lang === "en";

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [method, setMethod] = useState("telegram");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError(isEn ? "Please enter your name" : "Пожалуйста, введите ваше имя");
      return;
    }
    if (!contact.trim()) {
      setError(isEn ? "Please enter your contact details" : "Пожалуйста, введите контактные данные");
      return;
    }
    if (!consent) {
      setError(isEn ? "You must consent to personal data processing" : "Необходимо согласие на обработку персональных данных");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate real server/API submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setName("");
      setContact("");
      setMessage("");
      setConsent(false);
    } catch {
      setError(isEn ? "An error occurred. Please try again later." : "Произошла ошибка при отправке. Пожалуйста, попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.formTitle}>
        {isEn ? "Request Wealth Consultation" : "Заявка на консультацию"}
      </h3>
      <p className={styles.formSubtitle}>
        {isEn 
          ? "Fill out the form, and I will reach out to you within one business day to arrange a free, comprehensive introductory session."
          : "Заполните форму, и я свяжусь с вами в течение рабочего дня для проведения бесплатной вводной сессии."}
      </p>

      {submitSuccess ? (
        <div className={styles.successBlock}>
          <CheckCircle2 size={48} className={styles.successIcon} />
          <h4 className={styles.successTitle}>
            {isEn ? "Request successfully submitted!" : "Заявка успешно отправлена!"}
          </h4>
          <p className={styles.successText}>
            {isEn 
              ? "Thank you for reaching out. I will contact you shortly using your preferred details."
              : "Спасибо за обращение. Я свяжусь с вами в ближайшее время по указанным контактам."}
          </p>
          <button 
            onClick={() => setSubmitSuccess(false)} 
            className="btn btn-outline" 
            style={{ marginTop: "1rem" }}
          >
            {isEn ? "Submit Another Request" : "Отправить еще одну заявку"}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          {error && <div className={styles.errorAlert}>{error}</div>}

          <div className={styles.inputGroup}>
            <label htmlFor="formName" className={styles.label}>
              <User size={16} className="text-gold" />
              {isEn ? "Your Name *" : "Ваше имя *"}
            </label>
            <input
              type="text"
              id="formName"
              className={styles.input}
              placeholder={isEn ? "Alexander" : "Константин"}
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isSubmitting}
              required
            />
          </div>

          <div className={styles.inputRow}>
            <div className={styles.inputGroup} style={{ flex: 1 }}>
              <label htmlFor="formMethod" className={styles.label}>
                {isEn ? "Contact via *" : "Способ связи *"}
              </label>
              <select
                id="formMethod"
                className={styles.select}
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                disabled={isSubmitting}
              >
                <option value="telegram">Telegram</option>
                <option value="phone">{isEn ? "Phone Call" : "Телефон"}</option>
                <option value="email">Email</option>
              </select>
            </div>

            <div className={styles.inputGroup} style={{ flex: 2 }}>
              <label htmlFor="formContact" className={styles.label}>
                <PhoneCall size={16} className="text-gold" />
                {isEn ? "Contact Info *" : "Контактные данные *"}
              </label>
              <input
                type="text"
                id="formContact"
                className={styles.input}
                placeholder={
                  method === "telegram" 
                    ? "@username" 
                    : method === "phone" 
                      ? (isEn ? "+1 (555) 019-2834" : "+7 (999) 000-00-00") 
                      : "example@mail.com"
                }
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                disabled={isSubmitting}
                required
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="formMessage" className={styles.label}>
              <MessageSquare size={16} className="text-gold" />
              {isEn ? "Your question or financial goal (optional)" : "Ваш вопрос или финансовая цель (необязательно)"}
            </label>
            <textarea
              id="formMessage"
              rows={4}
              className={styles.textarea}
              placeholder={isEn 
                ? "E.g., Portfolio audit, setting up alternative assets, tax optimization planning..."
                : "Например: Аудит текущего портфеля акций, составление ЛФП, подготовка к аттестации..."}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isSubmitting}
            />
          </div>

          <div className={styles.checkboxGroup}>
            <input
              type="checkbox"
              id="formConsent"
              className={styles.checkbox}
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              disabled={isSubmitting}
              required
            />
            <label htmlFor="formConsent" className={styles.checkboxLabel}>
              {isEn ? (
                <>
                  I consent to the processing of my personal data in accordance with the{" "}
                  <Link href="/en/privacy" target="_blank" className={styles.policyLink}>
                    Privacy Policy
                  </Link>
                  . *
                </>
              ) : (
                <>
                  Я даю согласие на обработку моих персональных данных в соответствии с{" "}
                  <Link href="/privacy" target="_blank" className={styles.policyLink}>
                    Политикой конфиденциальности
                  </Link>
                  . *
                </>
              )}
            </label>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{ width: "100%", justifyContent: "center", gap: "0.75rem", padding: "1rem" }}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              isEn ? (
                <>
                  <Loader2 size={18} className={styles.spinner} />
                  Submitting...
                </>
              ) : (
                <>
                  <Loader2 size={18} className={styles.spinner} />
                  Отправка...
                </>
              )
            ) : (
              isEn ? (
                <>
                  <Send size={18} />
                  Book Free Consultation
                </>
              ) : (
                <>
                  <Send size={18} />
                  Записаться на консультацию
                </>
              )
            )}
          </button>
        </form>
      )}
    </div>
  );
}

