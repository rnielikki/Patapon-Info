# start

Starts the gameplay. Follows after [multi_battleGoAHead](./multi_battlegoahead.md).

**They are defined separately for single play and multiplay**.

## Code Information

- **Name**: `start`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0c 1e 00`
- **Assembly Address in Memory** : `0x89711d8`

## Parameters

- `(int)Var0` *(8 bytes)* : Please describe what this does.

## Example

Here is one example in hex:

```25 0c 1e 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
start((int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089711d8(int param_1,undefined4 param_2)

{
  int *piVar1;
  int iVar2;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  iVar2 = *(int *)(*(int *)(param_1 + 0x10) + 0x158);
  if (iVar2 != 0) {
    if (*(char *)(iVar2 + 0x3f74) == '\0') {
      func_0x08b5f500(iVar2,*piVar1 == 0,1);
      iVar2 = *(int *)(param_1 + 0x10);
    }
    else {
      iVar2 = *(int *)(param_1 + 0x10);
    }
    if ((((iVar2 != 0) && (*(int *)(iVar2 + 0x2b8) != 0)) &&
        (iVar2 = *(int *)(*(int *)(iVar2 + 0x2b8) + 0x2c), iVar2 != 0)) &&
       (iVar2 = *(int *)(iVar2 + 100), iVar2 != 0)) {
      *(undefined *)(iVar2 + 0x20c) = 1;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

