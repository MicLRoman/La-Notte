from flask import Flask, render_template

# Инициализируем приложение
# __name__ помогает Flask найти папкb 'templates' и 'static'
app = Flask(__name__)

# Создаем маршрут (route) для главной страницы
@app.route('/')
def home():
    # Функция render_template автоматически найдет 'index.html'
    # в папке 'templates' и вернет его.
    return render_template('index.html')

# Условие, которое позволяет запустить сервер
# командой 'python app.py'
if __name__ == '__main__':
    # debug=True автоматически перезагружает сервер при изменениях
    app.run(debug=True, port=6001)