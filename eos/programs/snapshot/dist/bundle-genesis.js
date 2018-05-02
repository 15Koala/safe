const SNAPSHOT_FILE = '/snapshot.csv';
let snapshot = null;
genesis = null;

window.onload = () => init();

const init = () => {
  document.body.id = "loading", generate_genesis();
};

const generate_genesis = () => {
  if (check_url(SNAPSHOT_FILE)) snapshot_load(SNAPSHOT_FILE, response => {
    if (response) snapshot = snapshot_csv_to_array(response), snapshot.shift(), genesis = new Genesis(snapshot).json, setTimeout(() => document.body.id = "ready", 1000);
  });else document.body.id = "error";
};

const snapshot_csv_to_array = csv => {
  let rows = csv.split(/\r\n|\n/);
  let output = [];

  for (var i = 0; i < rows.length; i++) {
    let _registrant,
        registrant = rows[i].split(','),
        [eth, eos, balance] = registrant;
    if (eth && eos && balance) _registrant = { eth: eth, eos: eos, balance: balance }, output.push(_registrant);
  }
  return output;
};

const snapshot_load = (filename, callback) => {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', filename, true); // Replace 'my_data' with the path to your file
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
};

const check_url = uri => {
  let http;
  if (window.XMLHttpRequest) http = new XMLHttpRequest();else http = new ActiveXObject("Microsoft.XMLHTTP");
  http.open('HEAD', uri, false);
  http.send();
  return http.status != 404;
};

const bind_snapshot_upload = () => {
  document.forms['snapshot-upload'].elements['snapshot-file'].onchange = function (event) {
    if (!window.FileReader) return; // Browser is not compatible
    let reader = new FileReader();
    reader.onload = function (event) {
      if (event.target.readyState != 2) return;
      if (event.target.error) {
        alert('Error while reading file');
        return;
      }
      genesis = event.target.result;
    };

    reader.readAsText(event.target.files[0]);
  };
};
class Genesis {

  constructor(snapshot) {
    this.json = {
      "initial_timestamp": "2017-03-30T12:00:00",
      "initial_parameters": {
        "maintenance_interval": 86400,
        "maintenance_skip_slots": 3,
        "maximum_transaction_size": 2048,
        "maximum_block_size": 2048000000,
        "maximum_time_until_expiration": 86400,
        "maximum_producer_count": 1001
      },
      "immutable_parameters": {
        "min_producer_count": 21
      },
      "initial_accounts": []
    };

    if (snapshot) {
      this.json.initial_accounts = snapshot.map(registrant => {
        return { "name": registrant.eth, "owner_key": registrant.eos, "active_key": registrant.eos, "liquid_balance": `${registrant.balance} EOS` };
      });
    }
  }

}
// Snapshot: CSVs
const download_reclaimable_csv = data => {
  let headers = {
    eth: "eth_address",
    tx: "tx",
    balance: "amount"
  };
  export_csv(headers, data, generate_filename('reclaimable-tx'));
};

const download_reclaimed_csv = data => {
  let headers = {
    eth: "eth_address",
    eos: "eos_key",
    tx: "tx",
    amount: "amount"
  };
  export_csv(headers, data, generate_filename('successfully-reclaimed-tx'));
};

const download_snapshot_csv = data => {
  let headers = {
    eth: "eth_address",
    eos: "eos_key",
    balance: "balance"
  };
  export_csv(headers, data, generate_filename('snapshot'));
};

const download_rejects_csv = data => {
  let headers = {
    rejected: "error",
    eth: "eth_address",
    eos: "eos_key",
    balance: "balance"
  };
  export_csv(headers, data, generate_filename('rejections'));
};

// Snapshot: JSON
const download_reclaimable_json = data => export_json(data, generate_filename('reclaimable-tx'));
const download_reclaimed_json = data => export_json(data, generate_filename('successfully-reclaimed-tx'));
const download_snapshot_json = data => export_json(data, generate_filename('snapshot'));
const download_rejects_json = data => export_json(data, generate_filename('rejections'));

// Logs
const download_logs = data => export_log(data, generate_filename('logs'));

// Genesis JSON
const download_genesis_json = data => export_json(data, 'genesis');

// Helper
const generate_filename = type => `eos-${type}_${SNAPSHOT_ENV}_${SS_LAST_BLOCK}-${SS_FIRST_BLOCK}`;

//https://codepen.io/danny_pule/pen/WRgqNx
const convert_to_csv = objArray => {
  let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
  let str = '';
  for (let i = 0; i < array.length; i++) {
    let line = '';
    for (let index in array[i]) {
      if (line != '') line += ',';
      line += array[i][index];
    }
    str += line + '\r\n';
  }
  return str;
};

const export_csv = (headers, items, filename) => {
  filename = filename + '.csv' || 'export.csv';
  if (headers) {
    items.unshift(headers);
  }
  let jsonObject = JSON.stringify(items);
  let csv = convert_to_csv(jsonObject);
  let blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  if (navigator.msSaveBlob) {
    // IE 10+
    navigator.msSaveBlob(blob, filename);
  } else {
    let link = document.createElement("a");
    if (link.download !== undefined) {
      // feature detection
      // Browsers that support HTML5 download attribute
      let url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};

const export_json = (items, filename) => {
  filename = filename + '.json' || 'export.csv';
  let json = JSON.stringify(items, null, '\t');
  let blob = new Blob([json], { type: 'application/json;charset=utf-8;' });
  if (navigator.msSaveBlob) {
    // IE 10+
    navigator.msSaveBlob(blob, filename);
  } else {
    let link = document.createElement("a");
    if (link.download !== undefined) {
      // feature detection
      // Browsers that support HTML5 download attribute
      let url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};

const export_log = (logs, filename) => {
  filename = filename + '.log' || 'export.log';
  let log = logs.reduce((acc, log) => {
    return `${acc}${log}\r\n`;
  });
  let blob = new Blob([log], { type: 'text/plain;charset=utf-8;' });
  if (navigator.msSaveBlob) {
    // IE 10+
    navigator.msSaveBlob(blob, filename);
  } else {
    let link = document.createElement("a");
    if (link.download !== undefined) {
      // feature detection
      // Browsers that support HTML5 download attribute
      let url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};
