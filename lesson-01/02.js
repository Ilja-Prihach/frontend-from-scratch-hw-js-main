/* С помощью цикла while найдите факториал числа 10 и присвойте его переменной factorial

  Справка:
  Факториал числа 𝑛 (обозначается как 𝑛!)  — это произведение всех натуральных чисел от 1 до 𝑛 включительно.
  Например, факториал числа 3 это 1 * 2 * 3 (6).
*/

OLD_EMAIL="piratehnik9508@gmail.com"
CORRECT_NAME="Ilja-Prihach"
CORRECT_EMAIL="piratehnik9508@gmail.com"

git filter-branch --env-filter '
if [ "$GIT_COMMITTER_EMAIL" = "'"$piratehnik9508@gmail.com"'" ]
then
export GIT_COMMITTER_NAME="'"$Ilja-Prihach"'"
export GIT_COMMITTER_EMAIL="'"$piratehnik9508@gmail.com"'"
fi
if [ "$GIT_AUTHOR_EMAIL" = "'"$piratehnik9508@gmail.com"'" ]
    then
export GIT_AUTHOR_NAME="'"$Ilja-Prihach"'"
export GIT_AUTHOR_EMAIL="'"$piratehnik9508@gmail.com"'"
fi
' --tag-name-filter cat -- --branches --tags


// your code

