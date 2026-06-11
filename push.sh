#!/usr/bin/env bash
# SE Havacılık — GitHub push betiği
# Kullanım:
#   1) github.com adresinde "se-havacilik-design-system" adında BOŞ bir private repo oluşturun
#      (README, .gitignore, lisans EKLEMEYİN)
#   2) Bu klasörde terminali açıp şunu çalıştırın:
#      bash push.sh GITHUB_KULLANICI_ADINIZ

set -e

if [ -z "$1" ]; then
  echo "Kullanım: bash push.sh GITHUB_KULLANICI_ADINIZ"
  exit 1
fi

USERNAME="$1"
REPO="se-havacilik-design-system"

if [ ! -d .git ]; then
  git init
fi

# Web sitesi kaynak kodu pakette templates/website altında durur;
# repoda kök dizindeki website/ klasörüne taşınır:
if [ -d templates/website ] && [ ! -d website ]; then
  mv templates/website ./website
fi

git add .
git commit -m "İlk commit: SE Havacılık design system + web sitesi" || echo "Commit edilecek değişiklik yok, devam ediliyor..."
git branch -M main

if git remote get-url origin >/dev/null 2>&1; then
  git remote set-url origin "https://github.com/$USERNAME/$REPO.git"
else
  git remote add origin "https://github.com/$USERNAME/$REPO.git"
fi

git push -u origin main

echo ""
echo "✅ Tamamlandı: https://github.com/$USERNAME/$REPO"
