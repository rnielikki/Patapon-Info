# multi_isFinishGoAhead

After [multi_startGoAhead](./multi_startgoahead.md), checks if players are ready.

## Code Information

- **Name**: `multi_isFinishGoAhead`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 e7 00`
- **Assembly Address in Memory** : `0x891b7c8`

## Parameters

- `(undefined4)Var0` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 e7 00 / 04 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
multi_isFinishGoAhead((int *)iVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891b7c8(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 uVar2;
  int iVar3;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar2 = Save::Get_Save_BaseAddr(1);
  iVar3 = Save::Get_BaseAddr__0x78(uVar2,1);
  uVar2 = *(undefined4 *)(iVar3 + 100);
  iVar3 = Is_Multi(uVar2);
  if (iVar3 != 0) {
    iVar3 = *(int *)(param_1 + 0x10);
    if (iVar3 == 0) {
      iVar3 = 0;
    }
    if (*(int *)(iVar3 + 0x44) != 0xd) {
      PAC::PAC_setCmdId(param_2,0);
      return;
    }
  }
  iVar3 = FUN_089872b0(uVar2,0);
  if (iVar3 == 0) {
    *puVar1 = 0;
  }
  else {
    *puVar1 = 1;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

