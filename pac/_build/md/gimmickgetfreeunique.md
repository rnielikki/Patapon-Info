# gimmickgetFreeUnique

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `gimmickgetFreeUnique`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 19 1f 00`
- **Assembly Address in Memory** : `0x8942c5c`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 19 1f 00 / 04 00 00 00 / 02 00 00 00```

Which is interpreted as:

```c
gimmickgetFreeUnique((int *)iVar2)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08942c5c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 uVar2;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  *puVar1 = 0;
  if (*(int *)(param_1 + 0x10) != 0) {
    uVar2 = FUN_088b585c(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0x108));
    *puVar1 = uVar2;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

