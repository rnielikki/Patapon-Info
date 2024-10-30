# multi_startGoAhead

Called in **multi only**, after confirming tips, Indicates the player is ready.

## Code Information

- **Name**: `multi_startGoAhead`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 e5 00`
- **Assembly Address in Memory** : `0x891b608`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 16 e5 00```

Which is interpreted as:

```c
multi_startGoAhead()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891b608(int param_1,undefined4 param_2)

{
  undefined4 uVar1;
  int iVar2;
  int iVar3;
  
  uVar1 = Save::Get_Save_BaseAddr(1);
  iVar2 = Save::Get_BaseAddr__0x78(uVar1,1);
  iVar3 = *(int *)(iVar2 + 100);
  iVar2 = Is_Multi(iVar3);
  if (iVar2 != 0) {
    iVar2 = *(int *)(param_1 + 0x10);
    if (iVar2 == 0) {
      iVar2 = 0;
    }
    if (*(int *)(iVar2 + 0x44) != 0xd) {
      PAC::PAC_setCmdId(param_2,0);
      return;
    }
    if (*(char *)(iVar3 + 0xa6) != '\0') {
      PAC::PAC_setCmdId(param_2,0);
      return;
    }
  }
  iVar2 = Get_Execution_Pause_Phase(param_2);
  if (iVar2 == 0) {
    iVar2 = Is_Multi(iVar3);
    if (iVar2 == 0) {
      PAC::PAC_setCmdId(param_2,0);
      return;
    }
    Pause_Execution(param_2,1);
    iVar2 = FUN_08987190(iVar3,0);
    if (iVar2 == 0) {
      PAC::PAC_setCmdId(param_2,0);
      return;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

