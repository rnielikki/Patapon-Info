# multi_disableScore

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `multi_disableScore`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 0b 01`
- **Assembly Address in Memory** : `0x8928a48`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(uint)Var1` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 0b 01 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
multi_disableScore((int)1, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08928a48(int param_1,undefined4 param_2)

{
  int *piVar1;
  uint *puVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (uint *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = *(int *)(*(int *)(*(int *)(*(int *)(param_1 + 0x10) + 0x2b8) + 0x2c) + 0x58);
  if (iVar3 != 0) {
    if (*piVar1 == 0) {
      *(uint *)(iVar3 + 0x400) = *(uint *)(iVar3 + 0x400) & ~*puVar2;
    }
    else {
      *(uint *)(iVar3 + 0x400) = *(uint *)(iVar3 + 0x400) | *puVar2;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

