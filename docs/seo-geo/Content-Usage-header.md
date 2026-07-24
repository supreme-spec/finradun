# Content-Usage HTTP Header — finradun.ru
# =========================================================
# Добавляется через nginx.conf (или .htaccess для Apache)
# Указывает AI-системам: индексация разрешена, обучение запрещено

# Header value:
Content-Usage: search-indexing-allowed, ai-training-disallowed, citation-allowed-with-source

# =========================================================
# Расшифровка:
#
# search-indexing-allowed
#   → Поисковые роботы (Google, Yandex, Bing) могут индексировать
#   → AI-поисковики (Perplexity, ChatGPT-User, OAI-SearchBot, ClaudeBot, YouBot) могут индексировать
#
# ai-training-disallowed
#   → Запрещено использование контента для обучения генеративных AI-моделей
#   → Блокируются: GPTBot, CCBot, Bytespider, FacebookBot, Amazonbot, Applebot-Extended, etc.
#
# citation-allowed-with-source
#   → AI-поисковики могут цитировать контент с обязательным указанием источника (finradun.ru)
#   → Рекомендуемый формат цитирования: «Источник: finradun.ru — Сергей Свистунов»
#
# =========================================================
# Implementation in nginx.conf:
#
# location / {
#     add_header Content-Usage "search-indexing-allowed, ai-training-disallowed, citation-allowed-with-source" always;
# }
#
# Implementation in .htaccess:
#
# Header always set Content-Usage "search-indexing-allowed, ai-training-disallowed, citation-allowed-with-source"
#
