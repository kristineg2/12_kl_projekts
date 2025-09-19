import sqlite3
DB = 'spele.db'
conn = sqlite3.connect(DB)
cursor = conn.cursor()

cursor.execute('''
    SELECT id, speletajs, loma, punkti FROM rezultati
    ORDER BY punkti DESC
    LIMIT 3 
''')
top3 = cursor.fetchall()
conn.close()
if top3:
    print('TOP3 rezultāti:')
    for id_, speletajs, loma, punkti in top3:
        print(f'{id_}   {speletajs} {loma} - {punkti}')
else:
    print('Nav rezultātu.')