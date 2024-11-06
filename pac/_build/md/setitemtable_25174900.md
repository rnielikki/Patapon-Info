# setItemTable (25174900)

> *Other functions have the same name. Check the [Disambiguation page](./setItemTable.md) to find them.*

Sets item drop from the specific generator.

## Code Information

- **Name**: `setItemTable`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 49 00`
- **Assembly Address in Memory** : `0x8915e5c`

## Parameters

- `(int* )generator_handle` *(8 bytes)* : Handle of the generator, obtained from [create](./create.md) or [getHandle](./gethandle.md).
- `(int)item_table_id` *(8 bytes)* : ID of the Item table, defined from [beginAppearItem](./beginappearitem.md)

## Example

Here is one example in hex:

```25 17 49 00 / 08 00 00 00 / 84 00 00 00 / 02 00 00 00 / 84 03 00 00```

Which is interpreted as:

```c
setItemTable(((global)int *)giVar132, (int)900)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08915e5c(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  if ((*piVar1 != -1) && (iVar3 = FUN_08910c4c(param_1), iVar3 != 0)) {
    FUN_0896e3d0(iVar3,*puVar2);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

