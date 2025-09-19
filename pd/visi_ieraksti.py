import sqlite3
DB = 'spele.db'
conn = sqlite3.connect(DB)
cursor = conn.cursor()

cursor.execute('''
    SELECT id, speletajs, loma, punkti FROM rezultati
    ORDER BY punkti DESC
''')
ieraksti = cursor.fetchall()
conn.close()
if ieraksti:
    print('DB visi ieraksti:')
    for id_, speletajs, loma, punkti in ieraksti:
        print(f'{id_}   {speletajs} {loma} - {punkti}')
else:
    print('Nav rezultātu.')