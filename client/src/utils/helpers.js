export function pluralize(name, count) {
  if (count === 1) {
    return name;
  }
  return name + 's';
}

export function idbPromise(spotapot, method, object) {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open('spotapot', 1);
    let db, tx, spotapot;
    request.onupgradeneeded = function(e) {
      const db = request.result;
      db.createObjectSpotapot('restrooms', { keyPath: '_id' });
      db.createObjectSpotapot('categories', { keyPath: '_id' });
      db.createObjectSpotapot('donationCart', { keyPath: '_id' });
    };

    request.onerror = function(e) {
      console.log('There was an error');
    };

    request.onsuccess = function(e) {
      db = request.result;
      tx = db.transaction(appName, 'readwrite');
      store = tx.objectStore(appName);

      db.onerror = function(e) {
        console.log('error', e);
      };

      switch (method) {
        case 'put':
          store.put(object);
          resolve(object);
          break;
        case 'get':
          const all = store.getAll();
          all.onsuccess = function() {
            resolve(all.result);
          };
          break;
        case 'delete':
          store.delete(object._id);
          break;
        default:
          console.log('No valid method');
          break;
      }

      tx.oncomplete = function() {
        db.close();
      };
    };
  });
}
