# multi_stopGoAhead

Inidicates that every player is ready.

## Code Information

- **Name**: `multi_stopGoAhead`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 e6 00`
- **Assembly Address in Memory** : `0x891b724`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 16 e6 00```

Which is interpreted as:

```c
multi_stopGoAhead()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0891b724(int param_1,undefined4 param_2)

{
  undefined4 uVar1;
  int iVar2;
  
  uVar1 = Save::Get_Save_BaseAddr(1);
  iVar2 = Save::Get_BaseAddr__0x78(uVar1,1);
  uVar1 = *(undefined4 *)(iVar2 + 100);
  iVar2 = Is_Multi(uVar1);
  if (iVar2 != 0) {
    iVar2 = *(int *)(param_1 + 0x10);
    if (iVar2 == 0) {
      iVar2 = 0;
    }
    if (*(int *)(iVar2 + 0x44) != 0xd) {
      PAC::PAC_setCmdId(param_2,0);
      return;
    }
  }
  Set_Execution_Pause_Phase(uVar1,0);
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

