# multi_battleGoAHead

Performs countdown before the battle. This can be called without countdown.

## Code Information

- **Name**: `multi_battleGoAHead`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 b6 00`
- **Assembly Address in Memory** : `0x891b06c`

## Parameters

This function is parameterless.

## Remarks

If the Mission is with pons, or if the countdown is once performed, this is called but doesn't do any countdown.

To make countdown possible, call [startIntroEvent](./startintroevent.md) first and call this.

## Example

Here is one example in hex:

```25 16 b6 00```

Which is interpreted as:

```c
multi_battleGoAHead()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891b06c(int param_1,undefined4 param_2)

{
  bool bVar1;
  char cVar2;
  undefined4 uVar3;
  int iVar4;
  int iVar5;
  
  uVar3 = Save::Get_Save_BaseAddr(1);
  iVar4 = Save::Get_BaseAddr__0x78(uVar3,1);
  uVar3 = *(undefined4 *)(iVar4 + 100);
  iVar5 = *(int *)(param_1 + 0x10);
  iVar4 = *(int *)(*(int *)(iVar5 + 0x2b8) + 0x5c);
  if ((iVar4 == 0) || (*(char *)(iVar4 + 0x23) == '\0')) {
    if (iVar5 == 0) {
      iVar5 = 0;
    }
    *(undefined *)(iVar5 + 0x51) = 1;
    PAC::PAC_setCmdId(param_2,0);
  }
  else {
    iVar4 = Is_Multi(uVar3);
    if (iVar4 == 0) {
      cVar2 = '\0';
    }
    else {
      cVar2 = FUN_08986d3c(uVar3);
    }
    if (cVar2 != '\0') {
      uVar3 = Save::Get_Save_BaseAddr(1);
      iVar4 = Save::Get_BaseAddr__0x78(uVar3,1);
      bVar1 = *(char *)(*(int *)(iVar4 + 0x94) + 0x3d8) != '\0';
      if (bVar1) {
        bVar1 = *(int *)(*(int *)(iVar4 + 0x94) + 0x3f0) != 0;
      }
      if (bVar1) {
        return;
      }
    }
    iVar4 = Get_Execution_Pause_Phase(param_2);
    if (iVar4 == 0) {
      func_0x08b54b20(*(undefined4 *)(*(int *)(*(int *)(param_1 + 0x10) + 0x2b8) + 0x5c));
      Pause_Execution(param_2,1);
    }
    else {
      iVar4 = *(int *)(param_1 + 0x10);
      if (*(char *)(*(int *)(*(int *)(iVar4 + 0x2b8) + 0x5c) + 0x21) != '\0') {
        if (iVar4 == 0) {
          DAT_00000051 = 1;
        }
        else {
          *(undefined *)(iVar4 + 0x51) = 1;
        }
        PAC::PAC_setCmdId(param_2,0);
      }
    }
  }
  return;
}
```

