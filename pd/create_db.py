import sqlite3
DB = 'spele.db'
#savienojuuma izveeide ar db
conn = sqlite3.connect(DB)
#kursora izveide (gruzchiks)
cursor = conn.cursor()
#pieprasījums, kas veido datu bāzi
cursor.execute('''
    CREATE TABLE IF NOT EXISTS rezultati (
               id INTEGER PRIMARY KEY AUTOINCREMENT,
               speletajs TEXT NOT NULL,
               loma TEXT NOT NULL,
               punkti INTEGER NOT NULL
               )
''')
#SAGLABĀ IZMAIŅAS
conn.commit()
conn.close()
print('Tabula Rezultati izveidota')