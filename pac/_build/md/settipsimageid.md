# setTipsImageId

Sets ID of the tip to display.

## Code Information

- **Name**: `setTipsImageId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 28 00`
- **Assembly Address in Memory** : `0x894ba90`

## Parameters

- `(int)tip_internal_id` *(8 bytes)* : The [Tip ID](./guide/reference-table.md#tips-id). Note this **is not** in tip album order. **-2 for random tips**.

## Example

Here is one example in hex:

```25 0a 28 00 / 04 00 00 00 / 14 00 00 00```

Which is interpreted as:

```c
setTipsImageId((int *)iVar20)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894ba90(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = Save::Get_Save_BaseAddr(1);
  *(undefined4 *)(*(int *)(iVar2 + 0x58) + 0x28) = *puVar1;
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

