# getSummonPlayerId

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getSummonPlayerId`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 13 01`
- **Assembly Address in Memory** : `0x892952c`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 13 01 / 02 00 00 00 / 00 00 00 00 / 04 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
getSummonPlayerId((int)0, (int *)iVar1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892952c(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  *puVar2 = 0xffffffff;
  iVar3 = *(int *)(param_1 + 0x10);
  if (iVar3 == 0) {
    iVar3 = 0;
  }
  else {
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    iVar3 = *(int *)(iVar3 + 0xf8);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
  }
  if ((((iVar3 != 0) && (iVar3 = FUN_088a8650(iVar3,*puVar1), iVar3 != 0)) && (iVar3 != -0x170)) &&
     (((int *)(iVar3 + 0x178) != (int *)0x0 && (*(int *)(iVar3 + 0x178) == 8)))) {
    *puVar2 = *(undefined4 *)(iVar3 + 0x184);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

