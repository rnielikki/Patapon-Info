# setDisableKey

Enables or disables drum key inputs. Other keys (camera turn, mission cancel menu etc) are functional.

Used in Queen Kharma Bada Bada Bada Bon, tutorials in e.g. Defence practice.

## Code Information

- **Name**: `setDisableKey`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 07 00`
- **Assembly Address in Memory** : `0x897062c`

## Parameters

- `(bool)disable_keyinput` *(8 bytes)* : **Enables key input if this is 0**, otherwise the key input is disabled.
- `(undefined4)Var1` *(8 bytes)* : ???

## Example

Here is one example in hex:

```25 0c 07 00 / 02 00 00 00 / 00 00 00 00 / 02 00 00 00 / 01 00 00 00```

Which is interpreted as:

```c
setDisableKey((int)0, (int)1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0897062c(int param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  iVar3 = *(int *)(*(int *)(param_1 + 0x10) + 0x158);
  if (iVar3 != 0) {
    if (*piVar1 == 0) {
      func_0x08b5f5e0(iVar3,*puVar2);
    }
    else {
      func_0x08b5f5d0(iVar3,*puVar2);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

