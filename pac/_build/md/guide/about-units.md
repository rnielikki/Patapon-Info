# About Units

> [!CAUTION]
> NOT ALL reqActors are unit squads. ReqActors/Actors can be gimmick, as been observed in [`generatorparam`](./reference-table.md#generatorparam).

![A diagram about reqActor unit creation. `create()` makes a *generator*, `setTroopType()` moves it to troop, *generator* has *reqActors*, the *reqActors* become *squad* by calling `spawn()`, and the squads contain one or more *units* for each. Each *troop*, *squad*, and *unit* has their own "handle".](./images/unit.png)

- **An unit** is an *individual* target that has run-time information, like stamina percentage or status effect.
- **A squad** is one or multiple *units* that shares pre-defined data, like unit type and action.
- **A reqActor** is *object definitions* in scope of *squad*, but not spawned yet.
- **A generator** is an **[object pool](https://en.wikipedia.org/wiki/Object_pool_pattern)** that contains definition of the *reqActors*.


One generator can contain **max 8 types of reqActors**, so reqActor index in generator is expected 0~7.

Next Article: [How To: Create an Enemy Target](./how-to-create-an-enemy-target.md)