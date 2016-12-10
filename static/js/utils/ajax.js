export function ajax({type, route, body}) {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open(type, route, true);
      if (type === "POST" || type === "PUT" && body) {
          request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
          request.setRequestHeader("Accept", "application/json");
      }

      request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
          const data = JSON.parse(this.response);
          resolve(data);
        } else {
          reject(new Error('error ocurred'));
        }
      };

      request.onerror = function() {
        console.error('Something went wrong with the transaction');
      };

      if (body) {
          request.send(JSON.stringify(body));
      } else {
        request.send();
      }
    });
}