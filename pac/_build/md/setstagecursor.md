# setStageCursor

Moves world map cursor to the certain mission group (field, dungeon).

## Code Information

- **Name**: `setStageCursor`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 19 00`
- **Assembly Address in Memory** : `0x8b4f288`

## Parameters

- `(int)group_id` *(8 bytes)* : [Mission Group ID](./addquest.md#group_id-index) (specific field/dungeon region) to select.

## Example

Here is one example in hex:

```25 1c 19 00 / 08 00 00 00 / 1d 00 00 00```

Which is interpreted as:

```c
setStageCursor(((global)int *)giVar29)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b4f288(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  if ((*(int *)(param_1 + 0x10) != 0) &&
     (iVar2 = *(int *)(*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x10) + 0x30) + 0x14),
     iVar2 != 0)) {
    FUN_Azito__08b585e0(iVar2,*puVar1);
    *(undefined *)(iVar2 + 0x2c) = 1;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

