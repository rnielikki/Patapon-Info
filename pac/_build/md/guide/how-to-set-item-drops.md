# How To: Set Item Drops

## As quest completion reward

1. Call [resetQuestPay](../resetquestpay.md) to reset the rewards.
2. Call [setQuestPayItem](../setquestpayitem.md) to set the reward. Check [item ID indexes](./reference-table.md#item-id--weaponparam-id-indexes) for this.

Not Items, but quest completion exp point can set with [setQuestPayExp](../setquestpayexp.md).

## During Mission

### Enemy item drop

1. Call [beginAppearItem](../beginappearitem.md).
2. Setup it: [setAppearItem](../setappearitem.md), [setAppearItemKillTime](../setappearitemkilltime.md), [setCharinAppearParam](../setcharinappearparam.md) (Ka-ching)
3. Finalise with [endAppearItem](../endappearitem.md).
4. Put the table ID from `beginAppearItem` to [setReqActorItemTable](../setreqactoritemtable.md) **or** [setItemTable](../setItemTable.md).

### Pre-drop or auto drop

For item drop without killing enemy, use [addItemEffect](../additemeffect.md).

- If item drop is constant, put directly item ID.
- If item drop is not constant, and if it uses the item table, use [getAppearItemEx](../getappearitemex.md) from the table.

### Example

This logic drops potion from an enemy:

```c
00008334  25080200:beginAppearItem(2:320)
00008340  25080900:setAppearItemKillTime(26.0, 40.0)
00008354  25080800:setCharinAppearParam(2:4, 2:A, 8:60, 8:32, 16.0, 30.0)
00008388  25000700:cmd_mov(40:1C, 1.0)
0000839C  25080300:setAppearItem(1.0, 2:34, 2:0, 2:0, 2:FFFFFFFF)
000083C8  25000900:cmd_sub(40:1C, 1.0)
000083DC  25080400:endAppearItem()
...
0005C040  251F1F00:setReqActorItemTable(8:1A, 2:0, 2:320)

```

## Item from chests

> [!CAUTION]
> - For loot drop, consider every scenario for every item drop. Always **set default drop that makes sense**.
> - Make sure dropped item is fair or not much rewarding (the mission is for fun anyway!).

1. Call [itemTableAllClear](../itemtableallclear.md) so it doesn't mix up with already defined item tables.
2. Define table just like [above](#during-mission), but only step 1~3.
    1. Decide if extra logic for item drop will be implemented, e.g. [player levels](../getplayerclasslevel.md).
    2. Call [beginAppearItem((int)1)](../beginappearitem.md). **The parameter must be 1, otherwise it won't work**.
    3. Setup it, extra logic can be added here.
       - [setAppearItem](../setappearitem.md), [setAppearItemKillTime](../setappearitemkilltime.md) is not useful here, don't know why exists
    4. Finalise with [endAppearItem](../endappearitem.md).
3. Call [getAppearItem](../getAppearItem.md) to roll the item.
4. Call [resultBoxItemSet](../resultboxitemset.md) to store the result from 3.
5. Set address of [resultBoxItemLabel](../resultboxitemlabel.md) to the `itemTableAllClear` address.

### Example

```c
00012294  25165100:getPlayerClassId(2:0, 4:10)
000122A8  25165300:getPlayerClassLevel(2:0, 2:FFFFFFFF, 4:11)
...
/* 1. Clear the item table */
00012364  25080700:itemTableAllClear()
/* 2. Defines item table for loot */
00012368  25080200:beginAppearItem(2:1)
00012374  25080900:setAppearItemKillTime(26.0, 40.0)
00012388  25080800:setCharinAppearParam(2:4, 2:A, 8:60, 8:32, 16.0, 30.0)
000123BC  25000700:cmd_mov(40:1C, 1.0)
000123D0  25000300:cmd_call(1:12A4C)             //bunch of setAppearItem() with specific condition
000123D8  25080400:endAppearItem()
/* 3. Item roll */
000123DC  25080500:getAppearItem(2:1, 4:D, 4:E) //4:D and 4:E stores the roll result.
000123F8  25000300:cmd_call(1:1A8C8)
00012400  25000300:cmd_call(1:12454)
/* 4. Store the roll result to the box */
00012408  25166A00:resultBoxItemSet(4:D, 4:E) //Set result to 4:D and 4:E
0001241C  25000100:cmd_end()
```

## Special Case

For example, for cyclops throwing loot, the chest type is decided during mission. Normal [getAppearItem](../getappearitem.md) won't work in this case.

In this case, use **[getAppearItemEx](../getappearitemex.md)** to roll the loot (it is still unreliable random, but better than nothing).

```c
000010C0  25001C00:cmd_ifLB(8:2A, 0.0, 1:13B4)
000010D8  25000300:cmd_call(1:A08C)
    0000A08C  25080600:getAppearItemEx(2:190, 8:2A, 8:36, 2:0)
    0000A0B0  25000900:cmd_sub(8:2A, 912.0)
    0000A0C4  25000C00:cmd_inc(8:2A)
    0000A0D0  25000100:cmd_end()
000010E0  25000100:cmd_end()
```
