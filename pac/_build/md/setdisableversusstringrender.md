# setDisableVersusStringRender

Decides if VS string (string on the ground during VS) is visible or not.

## Code Information

- **Name**: `setDisableVersusStringRender`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 3e 01`
- **Assembly Address in Memory** : `0x892b0e4`

## Parameters

- `(bool)disable_vs_string` *(8 bytes)* : **0 enables VS string**, otherwise the string is is disabled.

## Example

Here is one example in hex:

```25 16 3e 01 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
setDisableVersusStringRender((int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892b0e4(int param_1,undefined4 param_2)

{
  int *piVar1;
  int iVar2;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  if ((((*(int *)(param_1 + 0x10) != 0) &&
       (iVar2 = *(int *)(*(int *)(param_1 + 0x10) + 0x2b8), iVar2 != 0)) &&
      (iVar2 = *(int *)(iVar2 + 0x2c), iVar2 != 0)) && (iVar2 = *(int *)(iVar2 + 0x6c), iVar2 != 0))
  {
    if (*piVar1 == 0) {
      (**(code **)(*(int *)(iVar2 + 0x10) + 0x28))();
    }
    else {
      (**(code **)(*(int *)(iVar2 + 0x10) + 0x2c))();
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

