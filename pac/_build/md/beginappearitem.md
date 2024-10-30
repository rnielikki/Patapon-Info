# beginAppearItem

Declares start of the item table with the given ID.

## Code Information

- **Name**: `beginAppearItem`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 08 02 00`
- **Assembly Address in Memory** : `0x896e808`

## Parameters

- `(int)item_table_id` *(8 bytes)* : ID of the Item table, will be used by e.g. [setReqActorItemTable](./setreqactoritemtable.md) later.

## Example

Here is one example in hex:

```25 08 02 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
beginAppearItem((int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0896e808(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  int iVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = *(int *)(param_1 + 0x10);
  if (iVar2 == 0) {
    iVar2 = 0;
  }
  else {
    if (iVar2 == 0) {
      iVar2 = 0;
    }
    iVar2 = *(int *)(iVar2 + 0x188);
    if (iVar2 == 0) {
      iVar2 = 0;
    }
  }
  if (iVar2 != 0) {
    FUN_08952fdc(iVar2,*puVar1);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

