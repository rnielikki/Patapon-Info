# setAppearancePosition

Please describe what this does.

## Code Information

- **Name**: `setAppearancePosition`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 20 00`
- **Assembly Address in Memory** : `0x891b99c`

## Parameters

- `(int *)handle_id` *(8 bytes)* : Handle of the troop.
- `(float)initial_position` *(8 bytes)* : X Position to place the troop units.

## Example

Here is one example in hex:

```25 16 20 00 / 08 00 00 00 / 68 00 00 00 / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setAppearancePosition(((global)int *)giVar104, (float)0)
```

This is usage of the `setAppearancePosition` in AoV VS Mission:

```c
0005AF60  25162000:setAppearancePosition(8:68, -100.0) //blue troop
0005AF74  25162100:setRebornPosition(8:68, -200.0)
0005AF88  25162000:setAppearancePosition(8:74, 2100.0) //red troop
0005AF9C  25162100:setRebornPosition(8:74, 2200.0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891b99c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar1,1);
  if (iVar3 != 0) {
    FUN_088de070(*puVar2,iVar3);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

