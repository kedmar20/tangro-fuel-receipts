# Tangro Tankbeleg Verwaltung

## Die Aufgabe

# API

## `GET https://tangro-demo-api.vercel.app/api/vehicles`

Retrieve a list of all the vehicles.

### Request Headers

| Name          | Value                 |
| ------------- | --------------------- |
| Authorization | `Bearer <YOUR_TOKEN>` |

### Response Body

Status Codes:

- `401` - the Authorization Token is either missing or faulty.
- `200` - An array of vehicles. A single vehicle has the following fields:

| Field          | Type   | Description                                         |
| -------------- | ------ | --------------------------------------------------- |
| `id`           | String | The vehicle id. A CUID                              |
| `name`         | String | The name of the vehicle. E.g. _VW Passat_           |
| `licensePlate` | String | The license plate of the vehicle. E.g. _HD-TA-1234_ |

### Example code

```typescript
const response = await fetch(
  "https://tangro-demo-api.vercel.app/api/vehicles",
  {
    headers: {
      Authorization: "Bearer <YOUR_TOKEN>",
    },
  }
);
```

---

## `GET https://tangro-demo-api.vercel.app/api/receipts`

Retrieve all the receipts

### Request Headers

| Name          | Value                 |
| ------------- | --------------------- |
| Authorization | `Bearer <YOUR_TOKEN>` |

### Response Body

Status Codes:

- `401` - the Authorization Token is either missing or faulty.
- `200` - An array of receipts. A single receipt has the following fields:

| Field           | Type            | Description                                                       | Example                                                    |
| --------------- | --------------- | ----------------------------------------------------------------- | ---------------------------------------------------------- |
| `id`            | String          | The receipt id.                                                   | A CUID                                                     |
| `vehicle`       | Vehicle         | The vehicle the receipt belongs to. See above for alle the fields | `{ id: '%%', name: 'VW Golf', licensePlate: 'B-XTA-4A5' }` |
| `date`          | ISO Date String | The date of the fuel receipt.                                     | `'2023-05-06T00:00:00.000Z'`                               |
| `odometer`      | Int             | The total number of driven kilometers.                            | `12405`                                                    |
| `liters`        | Float           | The amount of fuel in liters.                                     | `40.3`                                                     |
| `pricePerLiter` | Float           | The price per liter.                                              | `1.749`                                                    |
| `currency`      | `'EUR'`         | The currency. In our example this will always return `'EUR'`      | `'EUR'`                                                    |
| `valueAddedTax` | `19`            | The value added tax. In our example this will always return `19`. | `19`                                                       |

The receipts are ordered by `date` in descending order.

### Example code

```typescript
const response = await fetch(
  "https://tangro-demo-api.vercel.app/api/receipts",
  {
    headers: {
      Authorization: "Bearer <YOUR_TOKEN>",
    },
  }
);
```

---

## `POST https://tangro-demo-api.vercel.app/api/receipts`

Create a new fuel receipt.

### Request Body

| Field           | Type                 | Description                                                                | Example                    |
| --------------- | -------------------- | -------------------------------------------------------------------------- | -------------------------- |
| `date`          | String               | ISO Date.                                                                  | `2023-05-06T00:00:00.000Z` |
| `odometer`      | Int                  | The total km driven.                                                       | `25245`                    |
| `liters`        | Float                | The amount of liters fueled up.                                            | `40.1`                     |
| `pricePerLiter` | Float                | The price per liter.                                                       | `1.859`                    |
| `vehicleId`     | String               | The id of the vehicle that has been refueled                               | The CUID of the vehicle    |
| `valueAddedTax` | Int _(optional)_     | The value added tax. In our example this will always be `19`. _(optional)_ | `19`                       |
| `currency`      | `'EUR'` _(optional)_ | In this example this will always be `'EUR'`                                | `'EUR'`                    |

### Response Body

Status Codes:

- `401` - the Authorization Token is either missing or faulty.
- `201` - The new receipt has been created.

```typescript
const response = await fetch(
  "https://tangro-demo-api.vercel.app/api/receipts",
  {
    method: "POST",
    body: JSON.stringify({
      // the data
    }),
    headers: {
      Authorization: "Bearer <YOUR_TOKEN>",
    },
  }
);
```

---

## `POST https://tangro-demo-api.vercel.app/api/receipts/<RECEIPT_ID>`

Update the data of a single receipt.

### Request Headers

| Name          | Value                 |
| ------------- | --------------------- |
| Authorization | `Bearer <YOUR_TOKEN>` |

### Request Body

| Field           | Type                 | Description                                                                | Example                    |
| --------------- | -------------------- | -------------------------------------------------------------------------- | -------------------------- |
| `id`            | String               | The id of the receipt                                                      | A CUID                     |
| `date`          | String               | ISO Date.                                                                  | `2023-05-06T00:00:00.000Z` |
| `odometer`      | Int                  | The total km driven.                                                       | `25245`                    |
| `liters`        | Float                | The amount of liters fueled up.                                            | `40.1`                     |
| `pricePerLiter` | Float                | The price per liter.                                                       | `1.859`                    |
| `vehicleId`     | String               | The id of the vehicle that has been refueled                               | The CUID of the vehicle    |
| `valueAddedTax` | Int _(optional)_     | The value added tax. In our example this will always be `19`. _(optional)_ | `19`                       |
| `currency`      | `'EUR'` _(optional)_ | In this example this will always be `'EUR'`                                | `'EUR'`                    |

### Response Body

Status Codes:

- `401` - the Authorization Token is either missing or faulty.
- `404` - The receipt with the given `receiptId` does not exist.
- `200` - The receipt has been updated

```typescript
const response = await fetch(
  "https://tangro-demo-api.vercel.app/api/receipts/<RECEIPT_ID>",
  {
    method: "POST",
    body: JSON.stringify({
      // the data
    }),
    headers: {
      Authorization: "Bearer <YOUR_TOKEN>",
    },
  }
);
```

---

## `DELETE https://tangro-demo-api.vercel.app/api/receipts/<RECEIPT_ID>`

Delete a single receipt with the given id.

### Request Headers

| Name          | Value                 |
| ------------- | --------------------- |
| Authorization | `Bearer <YOUR_TOKEN>` |

### Response Body

Status Codes:

- `401` - the Authorization Token is either missing or faulty.
- `404` - There is no receipt for the given id.
- `200` - The receipt has been deleted.

### Example

```typescript
const response = await fetch(
  "https://tangro-demo-api.vercel.app/api/receipts",
  {
    method: "DELETE",
    headers: {
      Authorization: "Bearer <YOUR_TOKEN>",
    },
  }
);
```

---

## `GET https://tangro-demo-api.vercel.app/api/vehicles/[vehicleId]/receipts`

Retrieve all the receipts for a single vehicle with the given ID.

### Request Headers

| Name          | Value                 |
| ------------- | --------------------- |
| Authorization | `Bearer <YOUR_TOKEN>` |

### Response Body

Status Codes:

- `401` - the Authorization Token is either missing or faulty.
- `404` - The vehicle with the given `vehicleId` does not exist.
- `200` - An array of receipts. A single receipt has the following fields:

| Field           | Type            | Description                                                                                                                       |
| --------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `id`            | String          | The receipt id. A CUID                                                                                                            |
| `vehicle`       | Vehicle         | The vehicle the receipt belongs to. See above for alle the fields E.g. `{ id: '%%', name: 'VW Golf', licensePlate: 'B-XTA-4A5' }` |
| `date`          | ISO Date String | The date of the fuel receipt                                                                                                      |
| `odometer`      | Int             | The total number of driven kilometers. E.g. `12405`                                                                               |
| `liters`        | Float           | The amount of fuel in liters. E.g. `40.3`                                                                                         |
| `pricePerLiter` | Float           | The price per liter. E.g. `1.749`                                                                                                 |
| `currency`      | `'EUR'`         | The currency. In our example this will always return `'EUR'`                                                                      |
| `valueAddedTax` | `19`            | The value added tax. In our example this will always return `19`.                                                                 |

The receipts are ordered by `date` in descending order.

### Example code

```typescript
const response = await fetch(
  "https://tangro-demo-api.vercel.app/api/vehicles/<VEHICLE_ID>/receipts",
  {
    headers: {
      Authorization: "Bearer <YOUR_TOKEN>",
    },
  }
);
```

